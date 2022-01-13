# AWS

### 🚀  S3?

- Simple **_Storage_** Service
- 우리 웹사이트의 데이터베이스를 저장할 수 있는 곳

### 🚀  Route 53?

- Domain Name Service (DNS)
- 도메인 이름 시스템(DNS)은 사람이 읽을 수 있는 도메인 이름(예: www.amazon.com)을 머신이 읽을 수 있는 IP 주소(예: 192.0.2.44)로 변환합니다.

### 🚀  CloudFront?

- Cache 기능
  - 한번 서버에 요청하면 임시로 데이터를 저장해서 다음에 서버에 요청할때 처음부터 다시 응답하지 않아도 됨 → 서버 비용 덜 부담
- CDN (Content Delivery Network) 기능
  - Amazon의 인프라를 사용해서 전세계 어디에서도 똑같은 시간안에 정보를 받아 올 수있도록 하는 기능을 제공
    - 처음에는 s3에서 컨텐트에서 받아오는데 나중에는 제일 가까운 엗지에서 받아와서 빠르게 유저가 정보를 받아올수있따.
    - **Origin Server** : 원본 데이터를 가지고 있는 서버입니다. 보통 AWS에서의 Origin Server는 S3, Ec2 instance입니다.
    - **Edge Server = Edge Location** : AWS에서 실질적으로 제공하는 전 세계에 퍼져있는 서버입니다. Edge Server에는 요청받은 데이터에 대해서 같은 요청에 대해서 빠르게 응답해주기 위해 Cache 기능을 제공합니다.
