# web concepts

- [web concepts](#web-concepts)
  - [web 브라우징의 요소](#web-브라우징의-요소)
  - [네트워크의 작동구조](#네트워크의-작동구조)
    - [컴퓨터 찾기](#컴퓨터-찾기)
  - [Domain 네임과 URL](#domain-네임과-url)
  - [웹의 작동방식](#웹의-작동방식)
    - [웹의 구성품](#웹의-구성품)
    - [웹의 작동방식](#웹의-작동방식-1)
    - [packets](#packets)
    - [http 기본](#http-기본)
  - [nginx 기본](#nginx-기본)

언어만 배워선 웹이 어떻게 돌아가는지 알기 힘듭니다. 여기선 웹의 구조를 간단히 설명하겠습니다.

## web 브라우징의 요소

- **웹 페이지**: 웹페이지는 브라우저가 디스플레이 가능한 **document(HTML)입니다**. 웹 페이지는 다음과 같은 다양한 resource를 넣을 수 있습니다.
  - **Style 정보**: 페이지의 Look-And-Feel 관리 (CSS)
  - **Scripts**: 페이지에 **상호작용** 더하기 (JavaScript)
  - **Media**: Images, sounds, and videos.
- **웹 사이트**: 웹사이트는 여러 웹페이지(+ 관련 리소스)가 하나의 `domain` 이름을 공유하며 연결된 것입니다. 각각의 웹페이지는 링크로 연결되어 웹사이트의 다른 페이지로 넘어갈 수 있게 해줍니다.
- **웹 서버**: 인터넷에 웹사이트를 호스팅하는 컴퓨터.
- **웹 서비스**: 인터넷에서의 **request에 따라 기능 혹은 데이터 제공을 하는 소프트웨어**. 일반적으로 웹서버를 통해 서비스되며 유저가 상호작용 가능한 웹페이지를 제공 할 수도 있음. 많은 웹사이트(구글, Youtube, Facebook 등)는 웹서비스 이기도 합니다.
- **검색 엔진**: 다른 웹사이트에 있는 **웹페이지를 검색 가능하게 해주는 웹 서비스**

## 네트워크의 작동구조

인터넷은 간단히 말해 **서로 통신하는 컴퓨터들의 거대한 네트워크**입니다.

두 컴퓨터가 통신하기 위해서는 물리적으로 연결(Ethernet 케이블) 하거나 무선연결(Wi-Fi, BlueTooth)을 합니다. 더 큰 네트워크는 각각의 컴퓨터가 **네트워크 스위치**라는 기기에 연결되어 구성됩니다. 스위치는 서로 연결 가능하며 한 컴퓨터에서 전송된 메시지가 목적지로 가도록 합니다. 이는 **로컬 네트워크**입니다.

로컬 네트워크간을 연결하기 위해선 **라우터**라는 기기가 필요합니다. 라우터는 네트워크간 메시지를 어떻게 **forward**할 지 아는 컴퓨터입니다. 패킷이 도착하면, 라우터는 수신자 주소를 읽고 목적 네트워크의 수신자에게 도달되도록 forward 합니다. 네트워크 간 길을 찾기 위해서는 **인터넷 서비스 제공자(ISP)**라는 특별한 라우터를 가지고 다른 ISP의 라우터에도 접근 가능한 회사를 통해야 합니다.

인트라넷은 조직 구성원에게만 제한된 **private** 네트워크입니다. Extranet은 인트라넷과 비슷하지만 private 네트워크의 일부 또는 전체가 외부와의 공유 및 협업에 개방되어 있습니다.

### 컴퓨터 찾기

인터넷에 연결된 컴퓨터는 **IP 주소**라는 고유 주소가 있습니다. `.`으로 구분된 `0`~`255`까지 범위의 4개의 숫자로 이루어져 있습니다. for e.g, `192.0.2.172`

사람이 읽기 편하게 이 IP 주소는 **domain 이름**과 연결됩니다. e.g, `google.com`은 `142.250.190.78`이 사용하는 domain name입니다.

## Domain 네임과 URL

**Domain 네임** 은 인터넷 웹사이트에 부여된 사람이 읽기 쉬운 이름입니다. 도메인 이름은 여러 부분으로 구성되어 있습니다. TLD->Component는 오른쪽에서 왼쪽 순서입니다.

<img src="./img/domain-name.png" width="500">

- **TLD (Top-Level Domain)**: 유저에게 웹사이트의 목적을 알립니다. 일반적인 TLD의 경우(`.com`,`.org`,`.net`) 별다른 기준이 없지만 일부의 경우 더 엄격합니다. For e.g,
  1. Local TLD:  `.us`, `.fr`, `.se` 등의 국가 코드
  2. `.gov`, `.edu` 등
- **Label (Component)**: TLD를 뒤따릅니다. Label은 대소문자 구분없이 1 ~ 63자 이며, A ~ Z, 0 ~ 9, `-`(첫째나 마지막으로는 사용 불가)를 사용 가능합니다. Domain name은 여러 Label을 가질 수 있으며, TLD 바로 전의 Label은 **Secondary Level Domain(SLD)**이라고도 불립니다. 본인이 관리하는 도메인에 대해 **subdomains**을 줄 수 있습니다. e.g, `mozilla.org`의 `developer.mozilla.org`, `bugzilla.mozilla.org` 등

주소창에 적는 **Web  addresses**는 **Uniform Resource Locators(URLs)**의 일부입니다. URL 인터넷 상의 웹페이지, 이미지 등을 찾기 위한 고유 주소입니다.

```
https://developer.mozilla.org/en-US/
```

위 URL은:

- `https`: Request를 하기 위해 사용 되는 **프로토콜**(`HTTPS`는 `HTTP`의 안전한 버전입니다).
- `developer.mozilla.org`: URL의 도메인 네임부분
- `/en-us/`: 서버에서 리소스를 찾기 위한 `path(경로)` 

## 웹의 작동방식

인터넷에 연결되어 있는 컴퓨터는 **Client** 혹은 **Server**로 분류됩니다.

- **Client**: 일반적인 사용자의 네트워크 접속 기기 및 소프트웨어.
- **Server**: 웹사이트나 앱을 저장하는 컴퓨터. 클라이언트 웹사이트를 접속시 웹페이지 코드의 복사본이 서버에서 클라이언트 로 전송되어 브라우저가 렌더링하여 디스플레이합니다.

### 웹의 구성품

- **TCP/IP**: **Transmission Control Protocol(TCP)**과 **Internet Protocol(IP)**는 데이터가 인터넷 상을 어떻게 이동할 지 정하는 **Protocol** 입니다.
- **DNS**: **Domain Name System(DNS)**는 웹사이트를 위한 주소록입니다.
- **HTTP**: Hypertext Transfer Protocol`(HTTP)는 **application protocol**로 클라이언트와 서버가 서로 대화하기 위한 언어입니다.
- **Files**: 웹사이트는 많은 파일로 이루어져 있습니다.
  1. **Code**: 웹사이트는 HTML, CSS, JavaScript로 만들어져 있습니다.
  2. **Assets**: 웹사이트의 뜨는 브라우저가 해석하지 않는(코드가 아닌) 모든걸 일컫습니다. e.g, 이미지, 음악, 비디오 등.

### 웹의 작동방식

주소창에 웹 주소를 치면 다음이 일어납니다:

1. 브라우저가 DNS에 가서 실제 주소(IP)를 가져옵니다.
2. 브라우저가 서버에 웹사이트 복사본을 달라 HTTP Request를 보냅니다. 이 서버-클라이언트 간의 통신은 TCP/IP를 통해 이루어집니다..
3. 서버가 Request를 받아 들이면 "200 OK" 메시지를 보내며, 브라우저에 웹사이트의 파일을 **데이터 패킷**이라는 작은 덩어리로 나누어 보냅니다.
4. 브라우저가 패킷을 조립하여 웹페이지를 만들고 사용자에게 보여줍니다.

### packets

데이터가 인터넷 상에서 전송될 때는 수천 개의 조각으로 나뉘어지는데 그 이유는:

- 데이터가 drop되거나 corrupt되는 경우 작은 부분을 고치는게 전체를 새로 보내는거 보다 쉽습니다.
- 패킷이 각자 다른 route를 탈 수 있으며 이는 더 통신을 빠르게 합니다.

각각의 packet은 다음을 포함합니다:

- `header`: 서버와 클라이언트 IP 주소, packet number, 총 전송되는 packet의 수, 전송에 사용된 Protocol.
- `payload`: Packet의 실제 내용

### http 기본

HTTP는 데이터 요청/응답(request/response)를 위해 간단한 언어를 사용합니다. HTTP `GET` 메서드는 일반적으로 HTTP Request를 할 때 사용됩니다.

예를 들어 Request의 경우

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
```

Response의 경우:

```http
HTTP/2 200

date: Tue, 11 Feb 2025 11:13:30 GMT
expires: Tue, 11 Feb 2025 11:40:01 GMT
server: Google frontend
last-modified: Tue, 11 Feb 2025 00:49:32 GMT
etag: "65f26b7f6463e2347f4e5a7a2adcee54"
content-length: 45227
content-type: text/html

<!doctype html> ... (the 45227 bytes of the requested web page HTML)
```

주요 부분으로:

- `HTTP/2 200`: HTTP 서버가 Response하기 위해 사용하는 HTTP버전(HTTP/2)에 `status 코드`가 뒤따릅니다. `status code` `200`은 성공이라는 의미입니다.
- `data`,`expires`,etc: Request/Response의 추가 정보를 포함하는 HTTP 헤더.
- `<!doctype html>`, etc: Response의 body부

## nginx 기본

`nginx -s <signal>`: Execute `<signal>`

List of signals

- `stop`: fast shutdown
- `quit`: graceful shutdown
- `reload`: reloading the configuration file
- `reopen`: reopening the log files