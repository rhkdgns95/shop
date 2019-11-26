/**
 *  self.addEventListener("install", (event) => {})
 * 
 *  service-worker가 등록되자마자 발생하는 이벤트이다.
 *  설치가되면, serviceworker가 등록된 페이지에 대해서 요청을 날린다.
 *  event.waitUntil()으로 몇가지 일들이 일어날때까지 기다린다.
 *  첫째, 일반 브라우저에서 하는것처럼 fetch한다. (1)
 *  둘째, 유저의 cache로 weStore라는 폴더를 연다. (2)
 *  셋째, 캐시가 열리면 이 캐시안에 서버에서 얻은 response를 offlinePage와 함께 집어넣는다.  (3)
 *  이제 Application의 cache에 weStore디렉터리안에 캐시내용이 적혀있다.
 * 
 *  그리고 self.addEventListener("fetch", (event) => {})에서
 *  오프라인으로 접근할때, 
 *  이전 cache안에 weStore에 저장된 페이지를 open하면됨.
 *  => 이제 유저의 컴퓨터에서 js파일을 하나 가지게 된셈이다.
 */
self.addEventListener("install", (event) => {
    const offlinePage = new Request("/");
    event.waitUntil(
        fetch(offlinePage).then(response =>  // (1)
            caches.open("shop").then(cache =>  // (2)
                cache.put(offlinePage, response))   // (3)
        )
    )
})

self.addEventListener("fetch",  event => {
    event.respondWith(
        fetch(event.request).catch(err => 
            caches.open("shop").then(cache => 
                cache.match("/")
            )
        )
    )
});

self.addEventListener("push", event => {
    const title = "Slime";
    const icon = "/192x192.png";
    const options = {
        body: event.data.text(),
        icon,
        image: icon,
        badge: icon
    };
    
    event.waitUntil(self.registration.showNotification(title, options));
    alert("push");
});