const moment = require('moment')

module.exports = {
    // 날짜 포멧
    formatDate : function (date, format) {
        return moment(date).utc().format(format)
    },
    // 카드 게시글에서 글자 수가 많을 때 truncate
    truncate : function (str, len) {
        if (str.length > len && str.length > 0){
            let new_str = str + ' '
            new_str = str.substr(0, len)
            new_str = str.substr(0, new_str.lastIndexOf(' '))
            new_str = new_str.length > 0 ? new_str : str.substr(0, len)
            return new_str + '...'
        }
        return str
    },
    // 스크립트 태그 없애기
    stripTags : function (input){
        input = input.replace(/<(\/?)p>/gi,"");
        input = input.replace(/&nbsp;/gi,"");//공백제거 
        // input = input.replace(/<head>(.*?)<(\/?)head>/gi,"");//head에 포한됨 모든 내용 제거 
        // input = input.replace(/<style>(.*?)<(\/?)style>/gi,"");//style 태그에 포함된 모든 내용 제거
        // input = input.replace(/<(\/?)body>/gi,"");//body 태그 제거
        input = input.replace(/<[(?:.|\n)]*?>/gm, '');
        input = input.replace(/<[^>]*?>/gm, '');
        return input
    },
    editIcon: function (storyUser, loggedUser, storyId, floating = true){
        if(storyUser._id.toString() == loggedUser._id.toString()){
            if(floating){
                
                return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue">

                        <i class="fas fa-edit fa-small"></i>
                        </a>`
            }else {
                return `<a href="/stories/edit/${storyId}">
                        <i class="fas fa-edit"> 
                        </i>
                        </a>`
            }
        }else {
            return ''
        }
      
    },

    select : function (selected, options){
        return options
        .fn(this)
        .replace(
            new RegExp(' value="' + selected + '"'),
            '$& selected="selected"'
        )
        .replace(
            new RegExp('>' + selected + '</option>'),
            'selected="selected"$&'
        )
    },

 




}