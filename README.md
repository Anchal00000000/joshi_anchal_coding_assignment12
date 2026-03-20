# Joshi Anchal UI Garden - Assignment 13

## Prerequisites
- Docker installed
- Node.js 18+

## How to Run with Docker

### 1. Build the Docker image
```bash
docker build -t joshi_anchal_coding_assignment13 .
```

### 2. Run the container
```bash
docker run -p 8018:8018 --name joshi_anchal_coding_assignment13 joshi_anchal_coding_assignment13
```

### 3. Open in browser
Go to: http://localhost:8018

---

## Pre-commit Hooks (Husky)
Automatically runs on every `git commit`:
- Prettier formatting check
- ESLint code quality check
- All tests must pass

## GitHub Actions CI/CD
On every push/pull request to main:
- Prettier, ESLint, Tests, and Build all run automatically
- You will be notified by email if any check fails