// main.js
$(function(){
    var titleData = [
        {
            imgUrl:'images/main-g21plus.png',
            spanText:'갤럭시 S21+ 5G',
            pText:'인생 사진을 절대 놓치지 않는 방법. 갤럭시 S21+ 5G를 선보입니다. 스마트폰 촬영의 혁신을 경험해보세요. 8K 동영상 촬영에, 바로 영상에서 고화질 사진까지 추출할 수 있다니. 말 다했죠? 6,400만 화소 카메라, 갤럭시 사상 가장 빠른 칩과 대용량 올데이 배터리까지 갖추었습니다. 감탄할 준비, 되셨나요?'
        },
        {
            imgUrl:'images/main-g-ultra.png',
            spanText:'갤럭시 S21 Ultra 5G',
            pText:'인생 사진을 절대 놓치지 않는 방법. 갤럭시 S21 Ultra 5G를 선보입니다. 스마트폰 촬영의 혁신을 경험해보세요. 8K 동영상 촬영에, 바로 영상에서 고화질 사진까지 추출할 수 있다니. 말 다했죠? 6,400만 화소 카메라, 갤럭시 사상 가장 빠른 칩과 대용량 올데이 배터리까지 갖추었습니다. 감탄할 준비, 되셨나요?'
        },
        {
            imgUrl:'images/main-note10.png',
            spanText:'갤럭시 Note 10 5G',
            pText:'두 가지 크기로 만나는 갤럭시 노트10｜10+ 5G에는 새로운 차원의 성능이 담겨 있습니다. PC 수준의 하드웨어, 게임 콘솔, 스튜디오급 카메라와 재능 넘치는 펜까지. 세상을 압도하는 파워풀한 능력을 선보입니다.'
        },
    ];

    $('.bottom > ul > li').eq(0).click(function(){
        $('figure img')
        .attr('src', titleData[0].imgUrl);
        $('.content-box span').html(`${titleData[0].spanText}`);
        $('.content-box p').html(`${titleData[0].pText}`);
    });
    $('.bottom > ul > li').eq(1).click(function(){
        $('figure img')
        .attr('src', titleData[1].imgUrl);
        $('.content-box span').html(`${titleData[1].spanText}`);
        $('.content-box p').html(`${titleData[1].pText}`);
    });
    $('.bottom > ul > li').eq(2).click(function(){
        $('figure img')
        .attr('src', titleData[2].imgUrl);
        $('.content-box span').html(`${titleData[2].spanText}`);
        $('.content-box p').html(`${titleData[2].pText}`);
    });
})