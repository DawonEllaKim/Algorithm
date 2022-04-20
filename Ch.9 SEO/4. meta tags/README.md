# 4. meta tags, OG(open graph) Tags

## 🚀 Meta Tag란?

- 문서의 정보를 담고 있는 태그

```jsx
// 문서의 제목
<meta name="title" content="BLOG"/>

// 검색 엔진에 의해 검색 되는 단어 지정
<meta name="keywords" content="Daily TIL"/>

//검색 결과에 표시되는 문자를 지정
<meta name="description" content="Daily TIL"/>

//뷰포트 설정
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>

//검색 로봇 제어
<meta name="robots" content="noindex, nofollow"/>
```

## 🚀 Meta Robots이란?

- noindex: 검색 결과에 이 페이지를 표시 하지 않는다.
- nofollow: 이 페이지의 링크를 따라가지 않는다.
- noarchive: 검색결과에 저장된 페이지 링크를 표시하지 않는다.
- All(기본값): 색인 생성이나 게재에 대한 제한이 없다. 기본값이므로 명시적으로 표시해도 효과 없음.
- Non: noindex, nofollow와 같다.
- Index: 그 페이지를 수집대상으로 한다.
- Follow: 그  페이지를 포함해 링크가 걸린 곳을 수집대상으로 한다.

## 🚀 OG (Open Graph) 란?

- 콘텐츠의 요약내용이 “SNS에 게시되는데 최적화된 데이터"를 가지고 갈 수 있도록 설정하는 것
- 오픈그래프 (OG, 오픈 그래프 프로토콜)는 어떤 HTML문서의 메타정보를 쉽게 표시하기 위해서 메타정보에 해당하는 제목, 설명, 문서의 타입, 대표 URL 등 다양한 요소들에 대해서 사람들이 통일해서 쓸 수 있도록 정의해놓은 프로토콜이며, 페이스북에 의하여 기존의 다양한 메타 데이터 표기 방법을 참조하여 만들어졌다.
- 그 간편함으로 인해 현재는 페이스북은 물로이고, 네이버, 카카오톡 등에서도 널리 사용되고 있다.

## 🚀 OG 데이터 작동 원리

- URL 링크를 올렸을 때, 사이트의 크롤러가 URL을 미리 들어가 정보를 수집할 경우, 메타 데이터(meta 태그)에 오픈그래프(OG)로 지정되어 있는 title, description, image, url 등의 정보를 긁어와 표시한다.

## 🚀 OG tags 수정 후 내용이 바뀌지 않는 경우

- OG Tags를 수정했는데 내용이 바뀌지 않는 경우는 캐싱 (cashing)때문이다.
- 캐싱이란 반복적으로 호출되는 특정한 데이터를 캐시 메모리에 임시로 저장하여 다음 호출 때 더 빨리 해당 데이터를 공급해주는 기능
- 캐싱에는 소멸시효가 걸려있는데, 이 소멸시효가 지나지 않은 경우, 계속적으로 이미 캐싱된 데이터를 참조해서 불러올 수 있다.

## 🚀 OG 기본 태그

```jsx
<meta property="og:title" content="Ella's Blog"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.google.com"/>
<meta property="og:image" content="https://placeholder..."/>
```

## 🚀 OG 옵션 태그

```jsx
<meta property="og:image" content="http://example.com/ogp.jpg" />
<meta property="og:image:secure_url" content="https://secure.example.com/ogp.jpg" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="400" />
<meta property="og:image:height" content="300" />
<meta property="og:image:alt" content="A shiny red apple with a bite taken out" />
 
<meta property="og:video" content="http://example.com/movie.swf" />
<meta property="og:video:secure_url" content="https://secure.example.com/movie.swf" />
<meta property="og:video:type" content="application/x-shockwave-flash" />
<meta property="og:video:width" content="400" />
<meta property="og:video:height" content="300" />
 
<meta property="og:audio" content="http://example.com/sound.mp3" />
<meta property="og:audio:secure_url" content="https://secure.example.com/sound.mp3" />
<meta property="og:audio:type" content="audio/mpeg" />
```

---

[ 출처: [명월 일지](https://nowonbun.tistory.com/517), [kirin.log](https://velog.io/@kirin/OG-Open-Graph%ED%83%9C%EA%B7%B8) ]