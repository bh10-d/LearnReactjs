/*
    - các khái niệm về functions
    * => (arrow functions)
    * This and Bind
    * Hoisting
    * Closures
    * Scopes
    * Asynchronous callbacks (bất đồng bộ)
    * Callback
    * Pass by value || Pass by reference
*/

/*  Function
    Có 3 loại function
        1. Declaration function (được hoisting)
            function Example(){
                ...(syntax)
            }
        2. Expression function (không đưỢc hoisting)
            let || var || const Example = function(){
                ...(syntax)
            }
        3. Arrow function
            let || var || const Example = ()=>{
                ...(syntax)
            }

    Arrow Function cũng giống như Function bình thường nó khác nhau ở cách viết và cách tham chiếu đến bối cảnh (Context) 
    Để khởi chạy 1 function thì sử dụng toán tử call
    Toán tử call là: () .Vd: Example()
*/

/*  This and Bind
        this trong JS ám chỉ đối tượng hiện đang được sử dụng hoặc đang truy cập tới
            và this trong JS có các giá trị khác nhau tuỳ thuộc vào ngữ cảnh đang sử dụng
        * this trong method
        * this trong function
        * this trong DOM Event handlers
        * this trong một số function đặc biệt của JS
        * this đứng một mình


        https://viblo.asia/p/ban-co-thuc-su-hieu-ve-this-trong-javascript-YWOZr8er5Q0
*/

/*  Hoisting
    - Hoisting là khi code js khởi chạy thì nó sẽ duyệt qua 1 lần trước
    rồi đưa các biến khởi tạo lên đầu và khởi tạo nó
    - Có thể được hoisting là: var || function declaration 
    - Khai báo với biến như let và const khi đưỢc hoisted không được tạo giá trị
    và đƯỢc đưa vào "Temporal Dead Zone" (vùng tạm thời không sử dụng được)
    VD:
    {
        console.log(name);
        var name = 'hieu';
    }ở ví dụ này sẽ được hoisting 

    {
        console.log(name);
        let name = 'hieu';
    }ở ví dụ này sẽ không được hoisting
*/

/*  Closures
    - Là một hàm có thể ghi nhớ nơi nó được tạo và có thể truy cập biến bên ngoài phạm vi của nó
    biến được tham chiếu trong closure sẽ không bị xoá khỏi bộ nhớ khi hàm cha thực thi xong

    Summary:
        - Closure là một chức năng có quyền truy cập vào phạm vi cha ngay cả khi scope đã đóng
*/

/*  Scope
    - Scope liên quan khá nhiều đến closure và this


    https://viblo.asia/p/tim-hieu-sau-hon-ve-scope-javascript-Qbq5QrRwKD8
*/

/*  Pass by value || Pass by reference
    * Pass by value:
        các giá trị nguyên thuỷ trong js đều được truyền theo giá trị
    *Pass by reference:
        khi tạo 1 đối tượng thì sẽ được cung cấp 1 tham chiếu đến đối tượng đó
        VD: 
            - Nếu 2 biến đều cùng giữ 1 tham chiếu thì việc thay đổi đối tượng thì sẽ thay đổi ở cả 2 biến cùng tham chiếu đến đối tượng.    
*/