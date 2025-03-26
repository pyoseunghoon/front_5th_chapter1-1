(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const a="/front_5th_chapter1-1/",f={active:"text-blue-600 font-bold",inactive:"text-gray-600"},g=[["홍길동","5분 전","오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"],["김철수","15분 전","새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"],["이영희","30분 전","오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"],["박민수","1시간 전","주말에 등산 가실 분 계신가요? 함께 가요!"],["정수연","2시간 전","새로 나온 영화 재미있대요. 같이 보러 갈 사람?"]],c={footer:()=>`
            <footer class="bg-gray-200 p-4 text-center">
              <p>&copy; 2024 항해플러스. All rights reserved.</p>
            </footer>
    `,header:(e="/")=>{const l=localStorage.getItem("user"),o=r=>e===r?f.active:f.inactive;return l?`
              <header class="bg-blue-600 text-white p-4 sticky top-0">
                  <h1 class="text-2xl font-bold">항해플러스</h1>
              </header>
              <nav class="bg-white shadow-md p-2 sticky top-14">
                  <ul class="flex justify-around">
                      <li><a href="/" class="${o("/")}">홈</a></li>
                      <li><a href="/profile" class="${o("/profile")}">프로필</a></li>
                      <li><a href="/login" id="logout" class="text-gray-600">로그아웃</a></li>
                  </ul>
              </nav>
      `:`
              <header class="bg-blue-600 text-white p-4 sticky top-0">
                  <h1 class="text-2xl font-bold">항해플러스</h1>
              </header>
              <nav class="bg-white shadow-md p-2 sticky top-14">
                  <ul class="flex justify-around">
                      <li><a href="/" class="${o("/")}">홈</a></li>
                      <li><a href="/login" class="text-gray-600">로그인</a></li>
                  </ul>
              </nav>
      `}},u={homePage:()=>`
            <div class="bg-gray-100 min-h-screen flex justify-center">
                <div class="max-w-md w-full">
                    ${c.header("/")}
                    <main class="p-4">
                        <div class="mb-4 bg-white rounded-lg shadow p-4">
                            <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
                            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
                        </div>
                        <div class="space-y-4">
                            ${g.map(([e,l,o])=>p.PostItem(e,l,o)).join("")}
                        </div>
                    </main>
                    ${c.footer()}
                </div>
            </div>
    `,profilePage:()=>{const e=JSON.parse(localStorage.getItem("user")||"{}");return`
            <div class="bg-gray-100 min-h-screen flex justify-center">
                <div class="max-w-md w-full">
                    ${c.header("/profile")}
                    <main class="p-4">
                        <div class="bg-white p-8 rounded-lg shadow-md">
                            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">내 프로필</h2>
                            <form id="profile-form">
                                <div class="mb-4">
                                    <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
                                    <input type="text" id="username" value="${e==null?void 0:e.username}" class="w-full p-2 border rounded" />
                                </div>
                                <div class="mb-4">
                                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
                                    <input type="email" id="email" value="${e==null?void 0:e.email}" class="w-full p-2 border rounded" />
                                </div>
                                <div class="mb-6">
                                    <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
                                    <textarea id="bio" rows="4" class="w-full p-2 border rounded">${e==null?void 0:e.bio}</textarea>
                                </div>
                                <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">프로필 업데이트</button>
                            </form>
                        </div>
                    </main>
                    ${c.footer()}
                </div>
            </div>
    `},loginPage:()=>`
            <main class="bg-gray-100 flex items-center justify-center min-h-screen">
                <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
                    <form id="login-form">
                        <div class="mb-4">
                          <input id="username" type="text" placeholder="이메일 또는 전화번호" class="w-full p-2 border rounded">
                        </div>
                        <div class="mb-6">
                          <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
                        </div>
                        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
                    </form>
                    <div class="mt-4 text-center">
                        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
                    </div>
                    <hr class="my-6">
                    <div class="text-center">
                        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
                    </div>
                </div>
            </main>
    `,notFoundPage:()=>`
            <main class="bg-gray-100 flex items-center justify-center min-h-screen">
                <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
                    <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
                    <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
                    <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
                    <p class="text-gray-600 mb-8">요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
                    <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">홈으로 돌아가기</a>
                </div>
            </main>
    `},p={PostItem:(e,l,o)=>`
            <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                    <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                    <div>
                        <p class="font-bold">${e}</p>
                        <p class="text-sm text-gray-500">${l}</p>
                    </div>
                </div>
                <p>${o}</p>
                <div class="mt-2 flex justify-between text-gray-500">
                    <button>좋아요</button>
                    <button>댓글</button>
                    <button>공유</button>
                </div>
            </div>
    `},b={[a]:u.homePage,[`${a}login`]:u.loginPage,[`${a}profile`]:u.profilePage};function i(){return!!location.hash}function v(){return!location.hash&&location.pathname==="/index.hash.html"&&history.pushState({},"",`/index.hash.html#${a}`),i()?x(location.hash):location.pathname}function x(e){return e.substr(1,e.length)}function y(e){return"#"+e}function m(){let e=v();if(e===`${a}profile`&&!localStorage.getItem("user"))return d(i()?"hash":"basic",`${a}login`);if(e===`${a}login`&&localStorage.getItem("user"))return d(i()?"hash":"basic",`${a}`);const l=b[e]?b[e]():u.notFoundPage();document.getElementById("root").innerHTML=l,w()}function d(e,l){e==="hash"?location.hash=y(l):(history.pushState({},"",l),m())}function w(){const e=document.getElementById("login-form");e&&e.addEventListener("submit",t=>{t.preventDefault();const s=document.getElementById("username").value.trim();localStorage.setItem("user",JSON.stringify({username:s,email:"",bio:""})),d(i()?"hash":"basic",`${a}profile`)});const l=document.getElementById("logout");l&&l.addEventListener("click",t=>{t.preventDefault(),localStorage.removeItem("user"),d(i()?"hash":"basic",`${a}login`)});const o=document.getElementById("profile-form");o&&o.addEventListener("submit",t=>{t.preventDefault();const s=document.getElementById("username").value,n=document.getElementById("email").value,h=document.getElementById("bio").value;localStorage.setItem("user",JSON.stringify({username:s,email:n,bio:h})),alert("프로필이 업데이트되었습니다."),d(i()?"hash":"basic",`${a}profile`)});const r=document.querySelector("nav");r&&r.addEventListener("click",t=>{if(t.preventDefault(),t.target&&t.target.nodeName==="A"){const s=t.target.closest("a"),n=s.getAttribute("href").substring(1,s.getAttribute("href").length);d(i()?"hash":"basic",`${a}${n}`)}})}window.addEventListener("popstate",()=>{m()});window.addEventListener("hashchange",()=>{m()});window.addEventListener("DOMContentLoaded",()=>{m()});
