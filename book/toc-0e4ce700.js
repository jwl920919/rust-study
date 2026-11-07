// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = "<ol class=\"chapter\"><li class=\"chapter-item expanded\"><a href=\"title-page.html\" target=\"_parent\">러스트 프로그래밍 언어</a></li><li class=\"chapter-item expanded\"><a href=\"foreword.html\" target=\"_parent\">머리말</a></li><li class=\"chapter-item expanded\"><a href=\"ch00-00-introduction.html\" target=\"_parent\">소개</a></li><li class=\"chapter-item expanded\"><a href=\"ch01-00-getting-started.html\" target=\"_parent\"><strong aria-hidden=\"true\">1.</strong> 시작하기</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch01-01-installation.html\" target=\"_parent\"><strong aria-hidden=\"true\">1.1.</strong> 설치</a></li><li class=\"chapter-item expanded\"><a href=\"ch01-02-hello-world.html\" target=\"_parent\"><strong aria-hidden=\"true\">1.2.</strong> Hello, World!</a></li><li class=\"chapter-item expanded\"><a href=\"ch01-03-hello-cargo.html\" target=\"_parent\"><strong aria-hidden=\"true\">1.3.</strong> Hello, Cargo!</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch02-00-guessing-game-tutorial.html\" target=\"_parent\"><strong aria-hidden=\"true\">2.</strong> 추측 게임 프로그래밍하기</a><ol class=\"section\"></ol></li><li class=\"chapter-item expanded\"><a href=\"ch03-00-common-programming-concepts.html\" target=\"_parent\"><strong aria-hidden=\"true\">3.</strong> 일반적인 프로그래밍 개념</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch03-01-variables-and-mutability.html\" target=\"_parent\"><strong aria-hidden=\"true\">3.1.</strong> 변수 및 가변성</a></li><li class=\"chapter-item expanded\"><a href=\"ch03-02-data-types.html\" target=\"_parent\"><strong aria-hidden=\"true\">3.2.</strong> 데이터 형식</a></li><li class=\"chapter-item expanded\"><a href=\"ch03-03-how-functions-work.html\" target=\"_parent\"><strong aria-hidden=\"true\">3.3.</strong> 함수</a></li><li class=\"chapter-item expanded\"><a href=\"ch03-04-comments.html\" target=\"_parent\"><strong aria-hidden=\"true\">3.4.</strong> 댓글</a></li><li class=\"chapter-item expanded\"><a href=\"ch03-05-control-flow.html\" target=\"_parent\"><strong aria-hidden=\"true\">3.5.</strong> 제어 흐름</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch04-00-understanding-ownership.html\" target=\"_parent\"><strong aria-hidden=\"true\">4.</strong> 소유권 이해하기</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch04-01-what-is-ownership.html\" target=\"_parent\"><strong aria-hidden=\"true\">4.1.</strong> 소유권이란 무엇인가?</a></li><li class=\"chapter-item expanded\"><a href=\"ch04-02-references-and-borrowing.html\" target=\"_parent\"><strong aria-hidden=\"true\">4.2.</strong> 참조와 빌림</a></li><li class=\"chapter-item expanded\"><a href=\"ch04-03-slices.html\" target=\"_parent\"><strong aria-hidden=\"true\">4.3.</strong> 슬라이스 타입</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch05-00-structs.html\" target=\"_parent\"><strong aria-hidden=\"true\">5.</strong> 관련 데이터를 구조체로 구성하기</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch05-01-defining-structs.html\" target=\"_parent\"><strong aria-hidden=\"true\">5.1.</strong> 구조체 정의 및 인스턴스화</a></li><li class=\"chapter-item expanded\"><a href=\"ch05-02-example-structs.html\" target=\"_parent\"><strong aria-hidden=\"true\">5.2.</strong> 구조체를 사용한 예제 프로그램</a></li><li class=\"chapter-item expanded\"><a href=\"ch05-03-method-syntax.html\" target=\"_parent\"><strong aria-hidden=\"true\">5.3.</strong> 메서드</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch06-00-enums.html\" target=\"_parent\"><strong aria-hidden=\"true\">6.</strong> 열거형과 패턴 매칭</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch06-01-defining-an-enum.html\" target=\"_parent\"><strong aria-hidden=\"true\">6.1.</strong> 열거형 정의하기</a></li><li class=\"chapter-item expanded\"><a href=\"ch06-02-match.html\" target=\"_parent\"><strong aria-hidden=\"true\">6.2.</strong> 일치 제어 흐름 구성</a></li><li class=\"chapter-item expanded\"><a href=\"ch06-03-if-let.html\" target=\"_parent\"><strong aria-hidden=\"true\">6.3.</strong> 간결한 컨트롤 흐름 if let 및 let...else</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch07-00-managing-growing-projects-with-packages-crates-and-modules.html\" target=\"_parent\"><strong aria-hidden=\"true\">7.</strong> 패키지, 크레이트, 모듈</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch07-01-packages-and-crates.html\" target=\"_parent\"><strong aria-hidden=\"true\">7.1.</strong> 패키지 및 상자</a></li><li class=\"chapter-item expanded\"><a href=\"ch07-02-defining-modules-to-control-scope-and-privacy.html\" target=\"_parent\"><strong aria-hidden=\"true\">7.2.</strong> 모듈로 범위 및 개인 정보 보호 제어</a></li><li class=\"chapter-item expanded\"><a href=\"ch07-03-paths-for-referring-to-an-item-in-the-module-tree.html\" target=\"_parent\"><strong aria-hidden=\"true\">7.3.</strong> 모듈 트리에서 항목을 참조하기 위한 경로</a></li><li class=\"chapter-item expanded\"><a href=\"ch07-04-bringing-paths-into-scope-with-the-use-keyword.html\" target=\"_parent\"><strong aria-hidden=\"true\">7.4.</strong> 사용 키워드와 범위에 경로 가져 오기</a></li><li class=\"chapter-item expanded\"><a href=\"ch07-05-separating-modules-into-different-files.html\" target=\"_parent\"><strong aria-hidden=\"true\">7.5.</strong> 모듈을 다른 파일로 분리하기</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch08-00-common-collections.html\" target=\"_parent\"><strong aria-hidden=\"true\">8.</strong> 자주 쓰는 컬렉션</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch08-01-vectors.html\" target=\"_parent\"><strong aria-hidden=\"true\">8.1.</strong> 값의 목록을 벡터로 저장</a></li><li class=\"chapter-item expanded\"><a href=\"ch08-02-strings.html\" target=\"_parent\"><strong aria-hidden=\"true\">8.2.</strong> UTF-8 인코딩된 텍스트 문자열 저장</a></li><li class=\"chapter-item expanded\"><a href=\"ch08-03-hash-maps.html\" target=\"_parent\"><strong aria-hidden=\"true\">8.3.</strong> 해시 맵에 키와 관련 값 저장하기</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch09-00-error-handling.html\" target=\"_parent\"><strong aria-hidden=\"true\">9.</strong> 오류 처리</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch09-01-unrecoverable-errors-with-panic.html\" target=\"_parent\"><strong aria-hidden=\"true\">9.1.</strong> 패닉과 함께 복구 할 수없는 오류!</a></li><li class=\"chapter-item expanded\"><a href=\"ch09-02-recoverable-errors-with-result.html\" target=\"_parent\"><strong aria-hidden=\"true\">9.2.</strong> 결과와 복구 가능한 오류</a></li><li class=\"chapter-item expanded\"><a href=\"ch09-03-to-panic-or-not-to-panic.html\" target=\"_parent\"><strong aria-hidden=\"true\">9.3.</strong> 패닉에 빠지거나 패닉에 빠지지 마십시오!</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch10-00-generics.html\" target=\"_parent\"><strong aria-hidden=\"true\">10.</strong> 제네릭 타입, 트레이트, 라이프타임</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch10-01-syntax.html\" target=\"_parent\"><strong aria-hidden=\"true\">10.1.</strong> 일반 데이터 형식</a></li><li class=\"chapter-item expanded\"><a href=\"ch10-02-traits.html\" target=\"_parent\"><strong aria-hidden=\"true\">10.2.</strong> 특성으로 공유된 행동 정의하기</a></li><li class=\"chapter-item expanded\"><a href=\"ch10-03-lifetime-syntax.html\" target=\"_parent\"><strong aria-hidden=\"true\">10.3.</strong> Lifetimes로 참조 검증</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch11-00-testing.html\" target=\"_parent\"><strong aria-hidden=\"true\">11.</strong> 자동화 테스트 작성하기</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch11-01-writing-tests.html\" target=\"_parent\"><strong aria-hidden=\"true\">11.1.</strong> 테스트 작성 방법</a></li><li class=\"chapter-item expanded\"><a href=\"ch11-02-running-tests.html\" target=\"_parent\"><strong aria-hidden=\"true\">11.2.</strong> 테스트 실행 방법</a></li><li class=\"chapter-item expanded\"><a href=\"ch11-03-test-organization.html\" target=\"_parent\"><strong aria-hidden=\"true\">11.3.</strong> 시험 기관</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch12-00-an-io-project.html\" target=\"_parent\"><strong aria-hidden=\"true\">12.</strong> I/O 프로젝트: 명령줄 프로그램 만들기</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch12-01-accepting-command-line-arguments.html\" target=\"_parent\"><strong aria-hidden=\"true\">12.1.</strong> 명령행 인자를 받음</a></li><li class=\"chapter-item expanded\"><a href=\"ch12-02-reading-a-file.html\" target=\"_parent\"><strong aria-hidden=\"true\">12.2.</strong> 파일 읽기</a></li><li class=\"chapter-item expanded\"><a href=\"ch12-03-improving-error-handling-and-modularity.html\" target=\"_parent\"><strong aria-hidden=\"true\">12.3.</strong> 모듈화 및 오류 처리를 개선하기 위한 리팩토링</a></li><li class=\"chapter-item expanded\"><a href=\"ch12-04-testing-the-librarys-functionality.html\" target=\"_parent\"><strong aria-hidden=\"true\">12.4.</strong> 테스트 주도 개발로 기능 추가하기</a></li><li class=\"chapter-item expanded\"><a href=\"ch12-05-working-with-environment-variables.html\" target=\"_parent\"><strong aria-hidden=\"true\">12.5.</strong> 환경 변수로 작업하기</a></li><li class=\"chapter-item expanded\"><a href=\"ch12-06-writing-to-stderr-instead-of-stdout.html\" target=\"_parent\"><strong aria-hidden=\"true\">12.6.</strong> 오류를 표준 오류로 보내기</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch13-00-functional-features.html\" target=\"_parent\"><strong aria-hidden=\"true\">13.</strong> 함수형 언어 기능: 반복자와 클로저</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch13-01-closures.html\" target=\"_parent\"><strong aria-hidden=\"true\">13.1.</strong> 폐쇄</a></li><li class=\"chapter-item expanded\"><a href=\"ch13-02-iterators.html\" target=\"_parent\"><strong aria-hidden=\"true\">13.2.</strong> 반복기가 포함된 일련의 항목 처리</a></li><li class=\"chapter-item expanded\"><a href=\"ch13-03-improving-our-io-project.html\" target=\"_parent\"><strong aria-hidden=\"true\">13.3.</strong> I/O 프로젝트 개선</a></li><li class=\"chapter-item expanded\"><a href=\"ch13-04-performance.html\" target=\"_parent\"><strong aria-hidden=\"true\">13.4.</strong> 성능: 반복문과 반복자 비교하기</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch14-00-more-about-cargo.html\" target=\"_parent\"><strong aria-hidden=\"true\">14.</strong> Cargo와 Crates.io 더 알아보기</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch14-01-release-profiles.html\" target=\"_parent\"><strong aria-hidden=\"true\">14.1.</strong> 릴리스 프로필로 빌드 사용자 지정하기</a></li><li class=\"chapter-item expanded\"><a href=\"ch14-02-publishing-to-crates-io.html\" target=\"_parent\"><strong aria-hidden=\"true\">14.2.</strong> Crates.io에 크레이트 게시</a></li><li class=\"chapter-item expanded\"><a href=\"ch14-03-cargo-workspaces.html\" target=\"_parent\"><strong aria-hidden=\"true\">14.3.</strong> 화물 작업 영역</a></li><li class=\"chapter-item expanded\"><a href=\"ch14-04-installing-binaries.html\" target=\"_parent\"><strong aria-hidden=\"true\">14.4.</strong> 화물 설치로 바이너리 설치</a></li><li class=\"chapter-item expanded\"><a href=\"ch14-05-extending-cargo.html\" target=\"_parent\"><strong aria-hidden=\"true\">14.5.</strong> 사용자 지정 명령으로 화물 확장</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch15-00-smart-pointers.html\" target=\"_parent\"><strong aria-hidden=\"true\">15.</strong> 스마트 포인터</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch15-01-box.html\" target=\"_parent\"><strong aria-hidden=\"true\">15.1.</strong> Box&lt;T&gt;를 사용하여 힙의 데이터를 가리킴</a></li><li class=\"chapter-item expanded\"><a href=\"ch15-02-deref.html\" target=\"_parent\"><strong aria-hidden=\"true\">15.2.</strong> 스마트 포인터를 정규 참조처럼 취급하기</a></li><li class=\"chapter-item expanded\"><a href=\"ch15-03-drop.html\" target=\"_parent\"><strong aria-hidden=\"true\">15.3.</strong> Drop Trait으로 정리에 대한 코드 실행</a></li><li class=\"chapter-item expanded\"><a href=\"ch15-04-rc.html\" target=\"_parent\"><strong aria-hidden=\"true\">15.4.</strong> 참조 계산된 스마트 포인터인 Rc&lt;T&gt;</a></li><li class=\"chapter-item expanded\"><a href=\"ch15-05-interior-mutability.html\" target=\"_parent\"><strong aria-hidden=\"true\">15.5.</strong> RefCell&lt;T&gt; 및 내부 가변성 패턴</a></li><li class=\"chapter-item expanded\"><a href=\"ch15-06-reference-cycles.html\" target=\"_parent\"><strong aria-hidden=\"true\">15.6.</strong> 레퍼런스 사이클이 메모리를 누수할 수 있음</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch16-00-concurrency.html\" target=\"_parent\"><strong aria-hidden=\"true\">16.</strong> 두려움 없는 동시성</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch16-01-threads.html\" target=\"_parent\"><strong aria-hidden=\"true\">16.1.</strong> 스레드를 사용하여 코드를 동시에 실행</a></li><li class=\"chapter-item expanded\"><a href=\"ch16-02-message-passing.html\" target=\"_parent\"><strong aria-hidden=\"true\">16.2.</strong> 메시지 전달을 통해 스레드 간에 데이터 전송</a></li><li class=\"chapter-item expanded\"><a href=\"ch16-03-shared-state.html\" target=\"_parent\"><strong aria-hidden=\"true\">16.3.</strong> 공유 상태 동시성</a></li><li class=\"chapter-item expanded\"><a href=\"ch16-04-extensible-concurrency-sync-and-send.html\" target=\"_parent\"><strong aria-hidden=\"true\">16.4.</strong> 전송 및 동기화를 통한 확장 가능한 동시성</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch17-00-async-await.html\" target=\"_parent\"><strong aria-hidden=\"true\">17.</strong> 비동기 프로그래밍: async, await, Future, Stream</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch17-01-futures-and-syntax.html\" target=\"_parent\"><strong aria-hidden=\"true\">17.1.</strong> 미래와 비동기 구문</a></li><li class=\"chapter-item expanded\"><a href=\"ch17-02-concurrency-with-async.html\" target=\"_parent\"><strong aria-hidden=\"true\">17.2.</strong> Async와의 동시성 적용</a></li><li class=\"chapter-item expanded\"><a href=\"ch17-03-more-futures.html\" target=\"_parent\"><strong aria-hidden=\"true\">17.3.</strong> 여러 미래 와 함께 일 함</a></li><li class=\"chapter-item expanded\"><a href=\"ch17-04-streams.html\" target=\"_parent\"><strong aria-hidden=\"true\">17.4.</strong> 스트림: 순서대로 이어지는 Future</a></li><li class=\"chapter-item expanded\"><a href=\"ch17-05-traits-for-async.html\" target=\"_parent\"><strong aria-hidden=\"true\">17.5.</strong> Async의 특성에 대해 자세히 알아보기</a></li><li class=\"chapter-item expanded\"><a href=\"ch17-06-futures-tasks-threads.html\" target=\"_parent\"><strong aria-hidden=\"true\">17.6.</strong> 선물, 작업 및 스레드</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch18-00-oop.html\" target=\"_parent\"><strong aria-hidden=\"true\">18.</strong> 객체 지향 프로그래밍 기능</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch18-01-what-is-oo.html\" target=\"_parent\"><strong aria-hidden=\"true\">18.1.</strong> 객체 지향 언어의 특성</a></li><li class=\"chapter-item expanded\"><a href=\"ch18-02-trait-objects.html\" target=\"_parent\"><strong aria-hidden=\"true\">18.2.</strong> 트레이트 객체로 공통 동작 추상화하기</a></li><li class=\"chapter-item expanded\"><a href=\"ch18-03-oo-design-patterns.html\" target=\"_parent\"><strong aria-hidden=\"true\">18.3.</strong> 객체 지향 디자인 패턴 구현</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch19-00-patterns.html\" target=\"_parent\"><strong aria-hidden=\"true\">19.</strong> 패턴과 매칭</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch19-01-all-the-places-for-patterns.html\" target=\"_parent\"><strong aria-hidden=\"true\">19.1.</strong> 모든 장소 본은 이용될 수 있습니다</a></li><li class=\"chapter-item expanded\"><a href=\"ch19-02-refutability.html\" target=\"_parent\"><strong aria-hidden=\"true\">19.2.</strong> 반박 가능성: 패턴이 일치하지 않을 수 있는 경우</a></li><li class=\"chapter-item expanded\"><a href=\"ch19-03-pattern-syntax.html\" target=\"_parent\"><strong aria-hidden=\"true\">19.3.</strong> 패턴 문법</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch20-00-advanced-features.html\" target=\"_parent\"><strong aria-hidden=\"true\">20.</strong> 고급 기능</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch20-01-unsafe-rust.html\" target=\"_parent\"><strong aria-hidden=\"true\">20.1.</strong> 안전 하지 않은 녹</a></li><li class=\"chapter-item expanded\"><a href=\"ch20-02-advanced-traits.html\" target=\"_parent\"><strong aria-hidden=\"true\">20.2.</strong> 고급 특성</a></li><li class=\"chapter-item expanded\"><a href=\"ch20-03-advanced-types.html\" target=\"_parent\"><strong aria-hidden=\"true\">20.3.</strong> 고급 형식</a></li><li class=\"chapter-item expanded\"><a href=\"ch20-04-advanced-functions-and-closures.html\" target=\"_parent\"><strong aria-hidden=\"true\">20.4.</strong> 고급 기능 및 폐쇄</a></li><li class=\"chapter-item expanded\"><a href=\"ch20-05-macros.html\" target=\"_parent\"><strong aria-hidden=\"true\">20.5.</strong> 매크로</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"ch21-00-final-project-a-web-server.html\" target=\"_parent\"><strong aria-hidden=\"true\">21.</strong> 최종 프로젝트: 멀티스레드 웹 서버</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"ch21-01-single-threaded.html\" target=\"_parent\"><strong aria-hidden=\"true\">21.1.</strong> 단일 스레드 웹 서버 만들기</a></li><li class=\"chapter-item expanded\"><a href=\"ch21-02-multithreaded.html\" target=\"_parent\"><strong aria-hidden=\"true\">21.2.</strong> 단일 스레드에서 다중 스레드 서버로</a></li><li class=\"chapter-item expanded\"><a href=\"ch21-03-graceful-shutdown-and-cleanup.html\" target=\"_parent\"><strong aria-hidden=\"true\">21.3.</strong> 우아한 종료 및 정리</a></li></ol></li><li class=\"chapter-item expanded\"><a href=\"appendix-00.html\" target=\"_parent\">부록</a><ol class=\"section\"><li class=\"chapter-item expanded\"><a href=\"appendix-01-keywords.html\" target=\"_parent\"><strong aria-hidden=\"true\">A.</strong> 키워드</a></li><li class=\"chapter-item expanded\"><a href=\"appendix-02-operators.html\" target=\"_parent\"><strong aria-hidden=\"true\">B.</strong> 연산자와 기호</a></li><li class=\"chapter-item expanded\"><a href=\"appendix-03-derivable-traits.html\" target=\"_parent\"><strong aria-hidden=\"true\">C.</strong> 파생 가능한 트레이트</a></li><li class=\"chapter-item expanded\"><a href=\"appendix-04-useful-development-tools.html\" target=\"_parent\"><strong aria-hidden=\"true\">D.</strong> 유용한 개발 도구</a></li><li class=\"chapter-item expanded\"><a href=\"appendix-05-editions.html\" target=\"_parent\"><strong aria-hidden=\"true\">E.</strong> 에디션</a></li><li class=\"chapter-item expanded\"><a href=\"appendix-06-translation.html\" target=\"_parent\"><strong aria-hidden=\"true\">F.</strong> 책 번역본</a></li><li class=\"chapter-item expanded\"><a href=\"appendix-07-nightly-rust.html\" target=\"_parent\"><strong aria-hidden=\"true\">G.</strong> Rust의 개발 과정과 Nightly Rust</a></li><li class=\"chapter-item expanded\"><a href=\"modern-rust.html\" target=\"_parent\"><strong aria-hidden=\"true\">H.</strong> 최신 Rust와 실전 보충</a></li></ol></li></ol>";
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

