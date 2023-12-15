FROM node:21-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Stage 2: Python Base
FROM python:3.11 AS python_base
WORKDIR /
COPY main.py __pycache__* requirements.txt ./
RUN python -m pip install --upgrade pip

RUN pip install fastapi uvicorn pydantic python-multipart

FROM base AS builder
WORKDIR /
COPY --from=deps /node_modules ./node_modules
COPY . .


RUN yarn build
# RUN npm run build

FROM base AS runner
WORKDIR /

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /.next/static ./.next/static

USER nextjs

EXPOSE 8000

ENV PORT 8000
ENV HOSTNAME "0.0.0.0"

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
