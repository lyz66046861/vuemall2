// var commentBox = {
//     data(){
//         return{
//             user:'',
//             content:''
//         }
//     },
//     template: '#makecomment',
//     methods:{
//         postComment(){}
//     }
// };

var vm1 = new Vue({
    el: '#app',
    data: {
        list: [
            {id: 1, user: 'lyzv1', content: 'niubi!'},
            {id: 2, user: 'lyzv2', content: 'zheniubi!'},
            {id: 3, user: 'lyzv3', content: 'fudujiniubi!'},
        ]
    },
    created(){
        this.loadcomments()
    },
    methods: {
        loadcomments(){
            var list = JSON.parse(localStorage.getItem(('cmts'||'[]')))
            this.list = list
        }
    },
    components: {
        'cmt-box': commentBox
    }
});



