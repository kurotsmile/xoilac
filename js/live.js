class Live_Football{
    data_live=null;
    ver_data="3";
    onLoad(){
        var name_data_temp="data_live_"+live.ver_data+"_"+live.get_hours();
        $("#list_trending").html('Đang Nạp dữ liệu xin vui lòng chờ!');
        if(localStorage.getItem(name_data_temp)!=null){
            live.data_live=JSON.parse(localStorage.getItem(name_data_temp));
        }

        if(live.data_live==null){
            live.conect_data((data_live)=>{
                localStorage.setItem(name_data_temp,JSON.stringify(data_live));
                live.data_live=data_live;
                live.load_data();
            });
        }else{
            live.load_data();
        }
    }

    load_data(){
        console.log(live.data_live);
        var matches=live.data_live.matches;
        $("#list_trending").html('');
        $.each(matches,function(index,m){
            $("#list_trending").append(live.box_matches(m));
        });
    }

    
    box_matches(data_m){
        var area=data_m.area;
        var awayTeam=data_m.awayTeam;
        var homeTeam=data_m.homeTeam;
        var html_box='';

        html_box += '<div class="xitem xitem-grid"><a href="" class="match-link"></a>';
        html_box += '<div class="xitem-header">';
        html_box += '<div class="xleague">'+area.name+'</div>';
        html_box += '</div>';
        html_box += '<div class="xitem-main">';
        html_box += '<div class="team team-home">';
        html_box += '<div class="team-logo"><img class="team-logo-img" loading="lazy" src="'+homeTeam.crest+'"></div>';
        html_box += '<div class="xname">';
        html_box += '<h3 class="team-name">'+homeTeam.name+'</h3>';
        html_box += '<div class="xcards"></div>';
        html_box += '</div>';
        html_box += '</div>';
        html_box += '<div class="xinfo">';
        html_box += '<div class="status">'+live.formatTimeFromISO(data_m.utcDate)+'</div>';
        html_box += '<div class="detail">'+live.fomat_date_vi(data_m.utcDate)+'</div>';
        html_box += '</div>';
        html_box += '<div class="team team-away">';
        html_box += '<div class="team-logo"><img class="team-logo-img" loading="lazy" src="'+awayTeam.crest+'"></div>';
        html_box += '<div class="xname">';
        html_box += '<h3 class="team-name">'+awayTeam.name+'</h3>';
        html_box += '<div class="xcards"></div>';
        html_box += '</div>';
        html_box += '</div>';
        html_box += '</div>';
        html_box += '<div class="xitem-bottom">';
        html_box += '<div class="xcommentator"><i class="fas fa-microphone mr-2"></i>Phở Bò</div>';
        html_box += '<div class="xitem-buttons">';
        html_box += '<div classw="ibs-live"><a href="https://live.xoilac36.org/truc-tiep/sunderland-afc-vs-sheffield-wednesday-6Hq21Jf" class="btn btn-sm">Trực tiếp</a></div>';
        html_box += '<div class="ibs-bet"><a href="https://live.xoilac36.org/goto?url=https%3A%2F%2F15.235.211.51%2F90p" target="_blank" rel="nofollow" class="btn btn-sm btn-betnow">Theo dõi</a></div>';
        html_box += '</div>';
        html_box += '</div>';
        html_box += '</div>';

        var box_item=$(html_box);
        return box_item;
    }


    conect_data(act_done=null) {
        $.ajax({
            url: 'https://nodejs-server-fnc.vercel.app/api/api.js',
            type: 'GET',
            success: function(response) {
                console.log(response);
                if(act_done) act_done(response);
            },
            error: function(xhr, status, error) {
                console.error('Error Server:', error);
                alert("Error!!");
            }
        });
    }

    
    get_hours(){
        var now = new Date();
        var hours = now.getHours();
        return hours;
    }

    fomat_date_vi(s_date){
        const date = new Date(s_date);
        const formattedDate = date.toLocaleDateString('vi-VN');
        return formattedDate;
    }

    formatTimeFromISO(s_date) {
        var date = new Date(s_date);
        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var formattedTime = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
        return formattedTime;
    }
}
var live=new Live_Football();