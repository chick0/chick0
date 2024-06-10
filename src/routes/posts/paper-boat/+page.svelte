<script>
    import { onMount } from "svelte"
    import { highlightAll } from "$lib/hljs"

    import Code from "$lib/component/Code.svelte"

    import example_obstacle_img from "$lib/assets/post/paper-boat/obstacle.png"

    onMount(() => {
        highlightAll()
    })
</script>

<h2>프로젝트 소개</h2>

<p>
    2022년 개최된 <b>청강 하이! 게임잼</b>에 참가해 제작한 게임입니다. 참가팀은 기획 1명, 그래픽
    2명, 프로그래머 2명으로 구성해 진행했습니다.
</p>
<p>저는 이 프로젝트의 메인 프로그래머로 인게임 및 아웃게임 부분을 개발했습니다.</p>

<hr />

<h2>게임 소개</h2>

<iframe
    src="https://www.youtube-nocookie.com/embed/K9PnKPkjFZ4"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>

<p>휴대폰의 회전에 따라 종이배의 이동 방향을 정할 수 있습니다.</p>
<p>계속 움직이는 종이배를 조작해 최대한 오래 장애물을 피하면 되는 게임입니다.</p>
<p>
    특정 달성 조건(점수, 특정 장애물과 충돌, ...)을 만족하면 추가적인 종이배의 외형을 획득 및 설정
    할 수 있습니다.
</p>

<hr />

<h2>시스템 소개</h2>

<p>이 글에서는 제가 제작한 시스템중 일부만 소개하고 있습니다.</p>

<h3>장애물 생성</h3>

<p>우선 이 게임의 메인이라 생각했던 장애물 생성 시스템을 소개하겠습니다.</p>

<p>사용할 수 있는 장애물 목록에서 랜덤으로 1개를 선택합니다.</p>

<p>그 다음 아래 함수를 이용해 장애물의 생성 좌표를 선정합니다.</p>

<Code
    language="cs"
    code={`
Vector3 GenPostion()
{
    // 플레이어의 현재 위치를 가져옴
    Vector2 BoatPostion = boat.transform.position;

    // 카메라를 이용해 표시되는 화면의 크기를 계산
    float height = Camera.main.orthographicSize;
    float width = height * Screen.width / Screen.height;

    // 계산된 화면의 크기와 플레이어의 위치를 통해 카메라에 표시되는 좌표 범위 계산
    float CamLeftLine = BoatPostion.x - width;
    float CamRightLine = BoatPostion.x + width;
    float xWeight = width * 3;

    float CamDownline = BoatPostion.y - height;
    float CamUpline = BoatPostion.y + height;
    float yWeight = height * 2;

    // 화면 범위에서 가중치를 곱한 범위에서 좌표 랜덤 선정
    return new Vector3(
        Random.Range(CamLeftLine - xWeight, CamRightLine + xWeight),
        Random.Range(CamDownline - yWeight, CamUpline + yWeight),
        0
    );
}
`} />

<p>이후 선택된 좌표에 몇가지 검사를 통해 해당 위치의 사용 가능 여부를 검증합니다.</p>
<br />

<div class="content-group">
    <div>
        <img src={example_obstacle_img} loading="lazy" alt="장애물 위치 검증 과정 설명" />
    </div>
    <div>
        <p>예시 이미지와 같이 가상의 빨간 원을 그립니다.</p>
        <p>빨간 원의 반지름은 기기 화면의 넓이와 높이중 큰 값을 선택합니다.</p>
        <p>(* 이 빨간 원은 플레이어가 지켜보는 좌표 범위를 의미합니다.)</p>
        <br />
        <p>
            장애물과 종이배의 거리를 이용해, 장애물이 원 안에 생성된다면 해당 장애물을 생성하지
            않습니다.
        </p>
        <p>
            이렇게 설정된 이유는 플레이어가 보이는 위치에서 장애물이 생성되는 경우와 플레이어의
            위치에 생성되는 경우를 방지하기 위함입니다.
        </p>
        <br />
        <p>위 검증 과정이 끝났다면, 해당 위치에 장애물을 생성합니다.</p>
    </div>
</div>

<hr />

<h3>배경 생성</h3>

<Code
    language="cs"
    code={`
Camera.main.ScreenToWorldPoint(
    new Vector3(Screen.width, Screen.height, Camera.main.transform.position.z)
);
        `} />

<p>
    우선 <b>Screen</b> 객체를 통해 화면 크기를 구합니다. 그 다음 카메라를 활용해 Unity 좌표계로 변환합니다.
</p>

<Code
    language="cs"
    code={`
// 화면 크기와 블록 스프라이트의 크기를 이용해 필요한 배경 블록 개수를 구합니다.
int xMax = (int)Mathf.Ceil(ScreenSize.x / SeaBlockSize.x);
int yMax = (int)Mathf.Ceil(ScreenSize.y / SeaBlockSize.y);

// 이때 배경 블록의 개수는 홀수가 되도록 조정합니다.
MaxBlock = new(
    (xMax % 2 == 0 ? xMax : xMax + 1) * 2 + 1,
    (yMax % 2 == 0 ? yMax : yMax + 1) * 2 + 1
);
    `} />

<p>
    계산된 화면 크기에 배경 블록 스프라이트의 크기를 나눠 필요한 배경 블록의 개수를 구하고 가중치를
    반영합니다.
</p>

<p>
    이때 필요한 배경 블록의 개수를 홀수로 고정하는 이유는 중앙 블록을 계산해야 하기 때문입니다.
    그리고 중앙 블록을 계산하는 이유는 플레이어가 중앙 블록에서 벗어나면 다음 배경 블록들을 생성하기
    때문입니다.
</p>

<p>생성된 배경 블록들은 추가적인 검증 과정 없이 일정 시간이 지나면 삭제됩니다.</p>
