# 어떻게 일할까

어떻게 에자일 방식으로 협업을 할 수 있을까?

Git 이라는 분산 버전 관리 시스템은 무척이나 에자일하다.
로컬환경에서 테스트 후에, Remote 저장소를 통해서 자신들의 작업을 모두 공유한다.
이것은 소스코드 레벨에서의 협업을 의미하는 것이지, 프로젝트 레벨에서의 협업은 또 다른
문제다.
즉. Git 이라는 것은 협업의 수단을 제공하는 것이지 그것 자체로서 협업이라고할 수 없다.

## 에자일 방식

빠르게 작성하고, 빠르게 테스트하고, 빠르게 피드백을 갖는다.
혼자서 한다면, 혼자서 로컬환경에서 빠르게 코드를 디버깅해가며 개발을 할 수 있다.
하지만 다른 사람들과 협업을 해야한다면 이를 어떻게 해결할 수 있는가?

각 Repository 마다 실행되는 ENV이 있는 것 처럼. Sharing 되는 Remote Repository 처럼
공통의 피드백을 주고받을 수 있는 환경이 있어야할 것이다.

- Local ENV (Personal Working ENV)

- Remote ENV (Public Working ENV)

즉.
협업을 Local ENV상 한다는 것은 무척이나 수고스러운 일이며, 협업을 위해서는 
필연적으로 Remote ENV 또한 마련되어야 함이 당연하다.

## Simple CI CD

CI/CD System 은 여러가지로 여러 목표가 있다.
거대해지고 복잡해지는 인프라 환경에서 거대한 시스템의 배포에 그 주요 목적이 있다고 할
수 있다.

Simple CI/CD 는 그러한 Production 환경을 위한 CI/CD가 아닌, 협업을 위한 Remote Server
배포를 위한 간단하고 유연한 CI/CD 환경을 제공한다.

두가지 기본 행동.
Pull
Deploy

그리고 여러 간단한 Tool 을 Package 형태로 제공하고, 각 Project에 맞는 여러 가지
Tool 을 각 프로젝트마다 커스텀 할 수 있도록 지향한다.
