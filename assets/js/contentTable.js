let analysis = [
    {id: 1 , name : "حمید" , family : "احمدی" , title : "خرید سخت است" , dic :"بنظر من به راحتی نمی توان طلا را فروخت ..." , data : "1400/12/11"},
    {id: 2 , name : "رضا" , family : "حسینی" , title : "فروش سخت است" , dic :"بنظر من به راحتی نمی توان طلا را فروخت ...", data : "1400/12/11"},
    {id: 3 , name : "حسین" , family : "وحیدی" , title : "ثبت نام سخت است" , dic :"بنظر من به راحتی نمی توان طلا را فروخت ..." , data : "1400/12/11"},
    {id: 4 , name : "نگار" , family : "ستوده" , title : "خرید اسان است" , dic :"بنظر من به راحتی نمی توان طلا را فروخت ..." , data : "1400/12/11"},
    {id: 5 , name : "سمیرا" , family : "نامداری" , title : "فروش اسان است" , dic :"بنظر من به راحتی نمی توان طلا را فروخت ..." , data : "1400/12/11"}
]

let contentTable = document.getElementById("contentTable");

contentTable.innerHTML = analysis.map((item) => (
    `
    <tr>
                                                    <td>${item.id}</td>
                                                    <td>${item.name}</td>
                                                    <td>${item.family}</td>
                                                    <td> ${item.title}</td>
                                                    <td>${item.dic} </td>
                                                    <td class="number">${item.data}</td>
                                                    <td>
                                                
                                                        <button class="btn btn-warning rounded-3 btn-noty-type" onclick="rejectionFun(${item.id})" data-type="warning">رد</button>

                                                        <button class="btn rounded-3 text-white btn-success btn-noty-type2"  onclick="supportFun(${item.id})"  data-type="success">تایید</button>
                                                       
                                                    </td>
                                                    <td>
                                                        <span  data-bs-toggle="modal" data-bs-target="#modal">
                                                            <i class="icon-eye"  style="font-size: 20px; cursor: pointer;"></i>
                                                        </span>
                                                    </td>
                                                </tr>
    `
)).join(" ")


const rejectionFun = (id) => {
    console.log(id);
    axios.post('https://jsonplaceholder.typicode.com/posts', { id: id, action: 'reject' })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
}

const supportFun = (id) => {
    console.log(id);
    axios.post('https://jsonplaceholder.typicode.com/posts', { id: id, action: 'confirm' })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
}