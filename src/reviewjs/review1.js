/*
    Promise
        -Sync : đồng bộ (đồng bộ là thằng nào viết trước chạy trước thằng nào viết sau chạy sau)
        -Async : bất đồng bộ (bất đồng bộ là thằng nào viết trước cũng sẽ chạy xong sau)
            +Những thằng thường chạy bất đồng bộ:
                -> setTimeout()
                -> setInterval()
                -> fetch
                -> XMLHttpRequest
                -> file reading
                -> request animation frame
        *
            Promise sinh ra để giải quyết các vấn đề bất đồng bộ và trước khi có promise thì thường sẽ sử dụng callback và callback sẽ xảy ra vấn đề về 
            callbackk hell nó sẽ bị sâu vào và khó nhìn và khó hiểu nên promise được sinh ra trong phiên bản ES6 (để tạo ra 1 promise thì sẽ dùng từ khoá new với promise và ở trong constructer
            sẽ truyền vào excuter function trong excuter function sẽ nhận được 2 tham số là hàm 1 là resolve 2 là reject 
                -> resolve sẽ gọi khi thao tác xử lý thành công
                -> reject sẽ gọi khi thao tác xử lý thất bại
            
            và đối tượng promise được tạo ra sẽ có 3 phương thức là then, catch, finally và
            thằng then sẽ được thực thi khi promise được resolve và 
            thằng catch sẽ được thực thi khi promise được reject
            thằng finally sẽ luôn được thực thi khi promise được resolve hoặc reject (1 trong 2)
                ):
                -Callback Hell (gọi callback lồng nhau và các callback ở trong đều phụ thuộc vào nhau)
                    VD:
                        setTimeout(function() {
                            console.log(1); // viec 1
                            setTimeout(function() {
                                console.log(2); // viec 2
                                setTimeout (function() {
                                    console.log(3); // viec 3
                                    setTimeout(function() {
                                        console.log(4); // viec 4
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                -Pyramid of doom
            VD: create Promise
                const promise = new Promise(
                    //Excutor
                    (resolve, reject) => {
                        // Logic
                        // thành công: resolve()
                        // thất bại: reject()
                        resolve();
                    }
                )
                promise
                    .then(()=>{})
                    .catch(()=>{})
                    .finally(()=>{})
            VD: Fake API
                var users = [
                    {
                        id: 1,
                        name: 'John'
                    },
                    {
                        id: 2,
                        name: 'James'
                    }
                ];
                var comments = [
                    {
                        id: 1,
                        user_id: 1,
                        content: 'nguyen luong bang'
                    },
                    {
                        id: 2,
                        user_id: 2,
                        content: 'ton duc thang'
                    }
                ];

                const getComments = ()=>{
                    return new Promise((resolve)=>{
                        setTimeout(()=>{
                            console.log(comments);
                        },1000);
                    })
                }
                const getUserByIds = (userIds)=>{
                    return new Promise((resolve)=>{
                        let result = users.filter((user)=>{
                            return userIds.includes(user.id);
                        });
                        setTimeout(()=>{
                            resolve(result);
                        },1000)
                    })
                }

                getComments()
                    .then((comments)=>{
                        let userIds = comments.map((comment)=>{
                            return comment.user.id;
                        });

                        getUserByIds(userIds)
                            .then((users)=>{
                                return {
                                    users: users,
                                    comments: comments
                                };
                            })
                    })
                    .then((data)=>{
                        console.log(data);
                    })
                
                // getUserByIds([1,2])
                //     .then((users)=>{
                //         console.log(users);
                //     });

            Video:
                    https://www.youtube.com/watch?v=QJmNEqy0zV0
                    https://www.youtube.com/watch?v=bgSbjJIwrj0
                    https://www.youtube.com/watch?v=_4F8ihblZFU
                    https://www.youtube.com/watch?v=Ldl571DAlXI
                    https://www.youtube.com/watch?v=pxyxbaq8i8c
                    https://www.youtube.com/watch?v=XN2mt1i1kjk
        *
    Fetch

    (setTimeout
    setInterval)


 */ 




/*
    setTimeout() : lệnh sẽ được thực thi 1 lần sau khoảng thời gian đã cho trước
    vd:
        myTimeout = setTimeout(function, milliseconds);
    Để dừng thực thi setTimeout thì sử dụng clearTimeout()
    vd:
        clearTimeout(myTimeout);
    setInterval() : lệnh sẽ được thực thi lặp lại sau khoảng thời gian cho trước
    vd:
        myInterval = setInterval(function, milliseconds);
    Để dừng thực thi setInterval thì sử dụng clearInterval()
    vd:
        clearInterval(myInterval);
*/