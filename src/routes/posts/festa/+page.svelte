<script>
    import ContentGroup from "$lib/component/ContentGroup.svelte"
    import Code from "$lib/component/Code.svelte"
    import Tweet from "$lib/component/Tweet.svelte"

    import imgForm from "$lib/assets/post/festa/Form.png"
    import imgTier from "$lib/assets/post/festa/Tier.png"
    import imgItem from "$lib/assets/post/festa/Item.png"
    import imgPick from "$lib/assets/post/festa/Pick.png"
</script>

<h1>프로젝트 소개</h1>

<p>게임 DJMAX RESPECT V <u>비공식</u> 유저 대회용 웹 사이트를 제작했습니다.</p>

<p>
    대회 준비 기간 동안 해당 사이트의 전체 기능을 제작했으며, 대회 진행 기간 해당 사이트 유지 보수
    및 관리를 담당했습니다.
</p>

<h1>웹 사이트 소개</h1>

<p>
    해당 웹 사이트에서는 대회 운영을 보조하기 위해 <b>참가 신청</b>, <b>이벤트 등록 및 참여</b>,
    <b>상품 등록 및 수령 신청</b> 기능을 제공하고 있습니다.
</p>

<h2>참가 신청</h2>

<div>
    <img src={imgForm} alt="참가 신청서 예시 이미지" width="500px" />
</div>

<p>대회 참여자는 사이트에 로그인하면 신청서에 입력한 정보를 자유롭게 확인 및 수정할 수 있습니다.</p>

<p>
    심판은 사이트에 로그인하면 참여자가 입력한 정보를 확인하고 심사할 수 있습니다. (점수 등록 및
    탈락 여부 설정)
</p>

<br />

<p>
    각 입력칸은 "일부 공개" 상태로 업로드된 영상을 필요로 하고 있습니다. 따라서 신청서를 제출하고
    확인하면 다음의 검증 과정을 거칩니다.
</p>

<ol>
    <li>정규식을 이용한 링크 검사</li>
    <li>YouTube API를 활용해 일부 공개 여부 확인</li>
</ol>

<p>
    해당 검증 과정을 통해 참가자의 실수를 방지하고자 했으며, 심사 과정을 편하게 만들고자 했습니다.
</p>

<h2>이벤트 등록 및 참여</h2>

<h2>상품 등록 및 수령 신청</h2>

<ContentGroup>
    <div>
        <img src={imgTier} alt="상품 티어(분류) 관리 페이지 스크린샷" />
    </div>
    <div>
        <p>
            우선 참가자의 최종 등수 및 당첨된 이벤트에 따라 선택할 수 있는 상품의 종류가 달랐습니다.
        </p>
        <p>
            따라서 사용자의 상품 선택 권한을 그룹별로 설정할 필요가 있어 '상품 티어'라는 명칭으로
            기능을 제작했습니다.
        </p>
        <br />
        <p>설정한 상품 티어(분류)는 상품 선택 과정에서도 확인할 수 있습니다.</p>
    </div>
</ContentGroup>

<hr />

<ContentGroup>
    <div>
        <img src={imgItem} alt="상품 관리 페이지 스크린샷" />
    </div>
    <div>
        <p>관리 UI에서는 상품의 기본 정보를 입력할 수 있습니다. (이름 및 설명)</p>

        <br />

        <p>상품 설명에는 마크다운 문법을 활용해 작성할 수 있습니다.</p>

        <Code
            language="markdown"
            code={`
(옵션)닉네임
-> '닉네임' 옵션을 키보드로 입력함

(선택)크기:8x8,10x10
-> '크기'를 '8x8' 혹은 '10x10' 옵션에서 선택함
`} />

        <p>
            추가로 위의 형태로 상품 설명에 입력하면 상품 선택 과정에서 입력을 받거나 선택창을 표시할
            수 있습니다.
        </p>
        <br />

        <p>
            상품 티어(분류)를 설정하면, 해당 티어끼리 상품이 표시됩니다. 또 해당 티어에 권한이 있는
            사용자가 상품을 선택할 수 있습니다.
        </p>
        <br />

        <p>
            사진은 상품의 미리보기 이미지로 사이트 내 파일 업로드 기능을 통해 업로드 후 선택할 수
            있습니다.
        </p>
    </div>
</ContentGroup>

<hr />

<ContentGroup>
    <div>
        <img src={imgPick} alt="상품 선택 페이지 스크린샷" />
    </div>
    <div>
        <p>상품 선택 화면은 다음과 같이 제작했습니다.</p>
        <br />

        <p>
            우선 해당 상품의 그룹(티어)의 이름과 설명이 위에 표시됩니다. 설명 아래에 해당 그룹에
            포함된 상품 목록을 나열합니다.
        </p>
        <br />

        <p>
            상품은 미리보기 이미지, 이름, 설명이 표시됩니다. 설명에는 상품의 정보와 해당 상품을
            수령하고자 하는 참가자가 확인해야 하는 사항이 표시됩니다.
        </p>
        <br />

        <p>
            이때 해당 그룹의 상품을 선택할 수 있다면 "선택" 버튼이 표시됩니다. 반대로 선택할 수
            없다면 상품 선택 권한이 없다는 안내 메시지가 나옵니다.
        </p>
    </div>
</ContentGroup>

<h1>기타</h1>

<p>해당 웹 사이트는 DLL 2023 대회에도 사용되었습니다.</p>

<p>(* 기존 기능 수정 및 코드 제공, 사이트 운영 제외)</p>

<Tweet user="DJMAX_FESTA" id="1691370109573718016" />
