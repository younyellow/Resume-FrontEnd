import style from './Mainpage.module.css'

const Mainpage = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.infobox}>
                    <h1>이시현</h1>
                    <div classname={style.info}>
                        <span>이메일 : </span><span>yellownyou@gmail.com</span>
                    </div>
                    <div classname={style.info}>
                        <span>깃허브 주소 : </span><span>https://github.com/younyellow</span>
                    </div>
                </div>
                <div className={style.introduce}>
                    <h1>자기 소개</h1>
                    <div>새로운 산업혁명이 이루어지고 있는 과도기에 내가 할 수 있는 것을 알아보다 데브 옵스 국비 지원 학원에 지원하여 수업을 듣게 되었습니다. 학원을 다니다 보니 개인적인 성향과 코딩이 잘 맞아 쉬는 날에도 공부하다 보니 사람들의 인정을 받아 2번의 프로젝트에서 모두 프로젝트 리더를 하게 되었습니다.
                        여기가 지원동기
                        데브 옵스 국비 지원 학원 수업을 들으며 스프링 mvc를 활용한 웹 개발과, 스프링 프레임워크를 활용한  rest api 서버와 리액트를 활용한 spa 웹을 프로젝트 리더로서 백 엔드 작업,프론트 엔드 작업,DB설계를 해본 경험을 가지고 있습니다.
                        팀원들 모두 비 전공자여서 부족한 부분들이 많이 있었습니다. 그래서 팀원들을 위해 샘플 코드들을 작성해 주었습니다.
                        또한 팀원들과 함께 성장하기 위해 프로젝트 종료 후 팀원들과 모여서 전체적인 코드들을 설명해주는 시간을 가졌습니다.
                        비전공자로서 아직 부족한 부분들이 많이 있지만 개발자로서 꾸준한 실제 기능 구현들을 통해 전공자들에 비해 뒤쳐지지 않고 회사의 팀원으로서 일을 하고 싶습니다.
                    </div>
                </div>
                <div className={style.skillbox}>
                    <h1>기술 스택</h1>
                    <div><span>사용 언어 : </span><span>java,javascript</span></div>
                    <div> <span>라이브러리 : </span><span>React</span></div>
                    <div><span>프레임워크 : </span><span>Spring,SpringBoot</span></div>
                    <div><span>데이터 베이스 : </span><span>MySQL</span></div>
                    <div><span>etc : </span><span> Docker,Aws,Git </span></div>
                </div>
                <div className={style.portfolio}>
                    <h1> 프로젝트 경험 </h1>
                    <div>1. Hue mung</div>
                    <div>2. Great Time Cinema</div>
                    <div>3.이력서 페이지</div>
                </div>
            </div>
        </>
    );
}
export default Mainpage;