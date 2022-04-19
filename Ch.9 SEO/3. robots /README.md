# 3. robots.txt

## 🚀 robots.txt란?

- 검색엔진 크롤러에거 robots.txt는 교통 표지판 같은 역할

## 🚀 robots.txt의 역할

- 접근 가능한 웹사이트와 접근 하면 안되는 곳을 구분해서 알려줌
- 사이트맵 (sitemap.xml)이 어디에 있는지 알려줌

## 🚀 robots.txt의 목적

1. 검색엔진 크롤러의 과도한 크롤링 및 요청으로 인한 과부하 방지
2. 검색엔진 크롤러의 일일 요청 수를 뜻하는 크롤 버짓 낭비 방지를 위해서
   → 결과적으로 정작 중요한 업데이트 또는 새로운 페이지가 검색엔진 결과에 반영이 되지 않거나 빠르게 색인되는데 불리함을 방지
3. 사이트맵의 위치를 제공하여 웹사이트의 콘텐츠가 검색엔진에게 더 잘 발견될 수 있도록 하기 위함

## 🚀 robots.txt 작성

- robots.txt는 사람이 아닌 검색엔진 크롤러가 읽고 인식해야하는 파일이기 때문에 정해진 형식과 문법에 따라 작성해야 한다.

1. `User-agent`: 어떤 검색엔진 크롤러를 지정할 것인지 (ex. Googlebot, Yeti, Bingbot, Daum, DuckDuckBot)
2. `Disallow`: 어떤 디렉토리를 제한할 것인지
3. `Allow`: 크롤링을 허용할 경로
4. `Sitemap`: 사이트맵이 위치한 경로의 전체 URL

```jsx
//모든 검색엔진 크롤러를 모든 /forbidden/ 서브 폴더 이하 디렉토리의 크롤링을 제한한다.

User-agent: *
Disallow: /forbidden/
```

```jsx
//네이버, 덕덕고, 다음 크롤러를 /not-for-naver-and-duckduckgo-and-daum/ 디렉토리 크롤링 제한

User-agent: Yeti
User-agent: DuckDuckBot
User-agent: Daum
Disallow: /not-for-naver-and-duckduckgo-and-daum/
```

```jsx
//네이버는 /not-for-naver/ 크롤링 제한, 덕덕고는 /not-for-duckduckgo/ 크롤링 제한

User-agent: Yeti
Disallow: /not-for-naver/

User-agent: DuckDuckBot
Disallow: /not-for-duckduckgo/
```

```jsx
//네이버, 덕덕고는 1,2,3 제한 다음은 a,b 제한

User-agent: Yeti
User-agent: DuckDuckBot
Disallow: /1/
Disallow: /2/
Disallow: /3/

User-agent: Daum
Disallow: /a/
Disallow: /b/
```

## 🚀 Allow 명시해주는 경우

- 특정하게 명시하지 않은 검색엔진 크롤러, 디렉토리는 모두 크롤링이 가능한것으로 간주된다. 하지만 굳이 가능한 크롤러, 디렉토리를 명시해야 할 경우가 있다.

```jsx
//네이버가 /not-for-naver/ 하위 파일들 크롤링못하게 하지만, /only-allow-here/은 허용한다.

User-agent: Yeti
Disallow: /not-for-naver/
Allow: /not-for-naver/only-allow-here/
```

## 🚀 Sitemap 명시

```jsx
User-agent: *
Diallow: /do-not-crawl-here/
Sitemap: https://www.example.com/sitemap.xml
```

---

[출처: [DATA LAB](https://seo.tbwakorea.com/blog/robots-txt-complete-guide/)]
