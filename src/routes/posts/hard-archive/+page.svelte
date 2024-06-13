<script>
    import ContentGroup from "$lib/component/ContentGroup.svelte"
    import Image from "$lib/component/props/Image.svelte"
    import Code from "$lib/component/props/Code.svelte"

    import imageIndex from "$lib/assets/post/hard-archive/index.png"
    import imageRecordCreate from "$lib/assets/post/hard-archive/record-create.png"
    import imageDashboardRecordSearch from "$lib/assets/post/hard-archive/dashboard-record-search.png"
    import imageButtonPage from "$lib/assets/post/hard-archive/button-page.png"
    import imageTeamDetail from "$lib/assets/post/hard-archive/team-detail.png"
    import imageTeamOwnerUi from "$lib/assets/post/hard-archive/team-owner-ui.png"
</script>

<h1>프로젝트 소개</h1>

<p>
    게임 DJMAX RESPECT V에는 타인의 기록을 확인할 수 있는 랭킹 시스템이 있습니다. 게임에는 '노멀
    판정' 모드, 강화된 '하드 판정' 모드 그리고 '맥스 판정' 모드가 있지만, 노멀 판정 모드의 랭킹
    정보만 제공하고 있습니다.
</p>

<p>
    그래서 유저들이 모여 구글 시트를 이용해 '하드 판정' 랭킹 시스템을 구축하고 운영하고 있었습니다.
</p>

<p>
    게임이 업데이트되면서 시트 관리의 어려움 및 랭킹 시스템의 몇몇 문제들이 생겨 제가 웹 사이트
    형태로 제작하게 되었습니다.
</p>

<h1>웹 사이트 소개</h1>

<Image src={imageIndex} alt="웹 사이트 스크린샷 이미지" maxWidth="600px" />
<p>
    <a href="https://hard-archive.com" target="_blank">전일 아카이브 웹 사이트</a>
</p>

<p>게임 DJMAX RESPECT V의 하드 판정 및 맥스 판정 모드의 랭킹 및 레이팅 기능을 제공합니다.</p>

<!-- <p>레이팅이란, ...</p> -->

<p>(* '전일 아카이브' 웹 사이트는 DJMAX RESPECT V의 공식 사이트 및 프로젝트가 아닙니다.)</p>

<h1>기능 소개</h1>

<h2>기록 등록 및 조회</h2>

<ContentGroup>
    <Image src={imageRecordCreate} alt="기록 등록 메뉴 스크린샷 이미지" maxWidth="600px" />
    <div>
        <p>작성중.</p>
    </div>
</ContentGroup>

<ContentGroup>
    <Image
        src={imageDashboardRecordSearch}
        alt="대시보드 기록 조회 메뉴 스크린샷 이미지"
        maxWidth="600px" />
    <div>
        <p>작성중.</p>
    </div>
</ContentGroup>

<h3>버튼별 기록 페이지</h3>

<Image src={imageButtonPage} alt="버튼 랭킹 페이지" />

<p>작성중.</p>

<h2>레이팅 및 랭킹</h2>

<p>작성중.</p>

<h3>점수 구조 추가 설명</h3>

<p>점수: 게임에서 달성한 점수</p>
<p>달성 판정: 게임에서 달성한 판정 (정확도)</p>
<p>환산 점수: 점수를 달성 공식(점수 구간에 따라 반영 비율 및 가중치가 다름)으로 환산한 점수 값</p>
<p>레이팅 점수: 환산 점수를 서열표 티어로 환산한 점수 값</p>
<p>퍼펙트 점수: 달성 판정이 100%라면 획득하는 점수 (난이도마다 획득 점수가 다름)</p>

<h2>팀 랭킹 시스템</h2>

<Image src={imageTeamDetail} alt="팀 페이지 예시 스크린샷" />

<p>
    팀 점수는 팀원들의 환산 점수의 평균 값을 사용합니다. 따라서 1인팀을 만들 경우 점수 패널티가
    있습니다. (팀원은 팀장을 포함해서 최대 10명까지 구성할 수 있습니다.)
</p>

<p>
    이때 팀원들의 환산 점수는 현재 진행되는 시즌에 달성한 기록만 포함시킵니다. 따라서 팀 점수 및
    랭킹은 시즌마다 초기화됩니다.
</p>

<br />

<p>
    추가로 팀 점수가 0점보다 작다면 유령 팀으로 취급해 랭킹 및 팀 목록 페이지에서 표시하지 않습니다.
</p>

<h3>팀 관리 메뉴</h3>

<Image src={imageTeamOwnerUi} alt="팀 관리 메뉴 스크린샷" />

<p>작성중.</p>

<h2>백그라운드 작업</h2>

<p>APScheduler를 이용해 제작된 백그라운드 프로그램은 특정 작업이 일정 시간마다 실행됩니다.</p>

<Code
    language="python"
    code={`
# 하드 판정 퍼펙트 현황 계산
add_cron(hard_perfect, minute="*/5")
# 맥스 저지 빈집 현황 계산
add_cron(max_count, minute="*/5")
# 전일 랭킹 계산
add_cron(top_rank_rate, minute=0)
# 종합 랭킹 계산
add_cron(ranking, minute="*/10")
# 레이팅 계산
add_cron(rating, minute=0)
`} />

<p>각 작업의 중요도의 따라 몇분마다 혹은 정각마다 실행되도록 설정되어있습니다.</p>
