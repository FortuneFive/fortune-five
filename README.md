# Fortune Five
> 프로젝트 소개글 작성하기
---

## 프로젝트 개요


## 프로젝트 구조


## 사용 기술


---

### 개발 환경 실행 방법

프로젝트 루트에서 아래 명령어를 실행하세요. 

```zsh

npm run dev # 프론트와 백엔드 앱 동시 실행 시작

```

백엔드 혹은 프론트엔드 앱을 개별적으로 실행시키고 싶다면, `/apps/**` 경로로 이동하여 동일한 명령어를 실행하세요. 

---

### 프로젝트 빌드 방법
프로젝트 루트 경로에서 아래 명령어를 실행하세요.

```zsh
npm run build
```

프론트엔트 앱을 개별적으로 빌드하고 싶다면, `/apps/frontend` 경로로 이동하여 아래 명령어를 실행하세요.

```zsh
npm run build
```

백엔드 앱을 개별적으로 빌드하고 싶다면, `/apps/backend` 경로로 이동하여 아래 명령어를 실행하세요.

```zsh
npm run build
```

---


### Remote Caching 활용하기

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```zsh
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```zsh
npx turbo link
```

---