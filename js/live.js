class Live_Football{
    data_live=null;
    data_live_matches=null;
    ver_data="5";
    onLoad(){
       var page=cr.arg("page");
       if(page=="live"){
            var id=cr.arg("id");
            live_detail.show_by_id(id);
       }else{
            this.show_page_home_live();
       }
    }

    show_page_home_live(){
        var name_data_temp="data_live_"+live.ver_data+"_"+live.get_hours();
        var name_data_live_matches="data_live_matches_"+live.ver_data+"_"+live.get_hours();
        $("#list_trending").html('<div class="container"><div class="row"><div class="col-12 text-center"><i class="fas fa-spinner fa-spin fa-x3"></i> Đang Nạp dữ liệu xin vui lòng chờ!</div></div></div>');
        if(localStorage.getItem(name_data_temp)!=null) live.data_live=JSON.parse(localStorage.getItem(name_data_temp));
        if(localStorage.getItem(name_data_live_matches)!=null) live.data_live_matches=JSON.parse(localStorage.getItem(name_data_live_matches));

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
        live.load_list_live_matches();
    }

    
    box_matches(data_m){
        var area=data_m.area;
        var awayTeam=data_m.awayTeam;
        var homeTeam=data_m.homeTeam;
        var html_box='';

        const homeGoals = data_m.score.fullTime.home;
        const awayGoals = data_m.score.fullTime.away;

        html_box += '<div class="xitem xitem-grid"><a href="" class="match-link"></a>';
        if(data_m.status=="IN_PLAY")html_box +='<div class="stick stick-live"><i class="dot"></i>Live</div>';
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
        
        if(data_m.status=="IN_PLAY"){
            html_box +='<div class="result"><div>'+homeGoals+'</div><div class="xspace">-</div><div>'+awayGoals+'</div></div>';
            html_box +='<div class="time-loaded">'+live.get_minute_match(data_m.utcDate)+'\'</div>';
        }
        else{
            html_box += '<div class="status">'+live.formatTimeFromISO(data_m.utcDate)+'</div>';
            html_box += '<div class="detail">'+live.fomat_date_vi(data_m.utcDate)+'</div>';
        }
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
        html_box += '<div classw="ibs-live"><a href="" class="btn btn-sm">Trực tiếp</a></div>';
        html_box += '<div class="ibs-bet"><a href="" target="_blank" rel="nofollow" class="btn btn-sm btn-betnow">Theo dõi</a></div>';
        html_box += '</div>';
        html_box += '</div>';
        html_box += '</div>';

        var box_item=$(html_box);
        $(box_item).click(function(){
            alert("sdsd");
            live_detail.show(data_m);
            return false;
        });
        return box_item;
    }

    load_list_live_matches(){
        $("#list_matchers_live").html("Loading...");
        if(live.data_live_matches==null){
            live.conect_data((data)=>{
                live.data_live_matches=data;
                localStorage.setItem("data_live_matches_"+live.ver_data+"_"+live.get_hours(),JSON.stringify(live.data_live_matches));
                live.show_list_live_matches(data);
            },"live.js");
        }else{
            live.show_list_live_matches(live.data_live_matches);
        }
    }

    show_list_live_matches(data){
        $("#list_matchers_live").html("");
        var list_macther=data.matches;
        $("#count_matchers_live").html(list_macther.length);
        $.each(list_macther,function(index,m){
            $("#list_matchers_live").append(live.box_item_live_matches(m));
        });
    }

    box_item_live_matches(data_m){
        var area=data_m.area;
        var awayTeam=data_m.awayTeam;
        var homeTeam=data_m.homeTeam;
        var competition=data_m.competition;

        let html = '<div class="match_box">';
            html += '<div class="mb_-header"><a href="" class="item-league"><i class="league-icon mr-2"><img loading="lazy" src="'+competition.emblem+'"></i>'+competition.name+'</a></div>';
            html += '<div class="match_list match_list-list">';
            html += '<div class="vitem vitem-vertical vitem-live"><a href="" class="match-link"></a>';
            html += '<div class="vitem-info">';
            html += '<div class="badge-live"><i class="dot"></i>Live</div>';
            html += '<div class="status">'+live.formatTimeFromISO(data_m.utcDate)+'</div>';
            html += '<div class="detail">'+live.fomat_date_vi(data_m.utcDate)+'</div>';
            html += '</div>';
            html += '<div class="item-team">';
            html += '<div class="team team-home">';
            html += '<div class="team-logo"><img class="team-logo-img" loading="lazy" src="'+homeTeam.crest+'"></div>';
            html += '<h3 class="team-name">'+homeTeam.name+'</h3>';
            html += '<div class="vitem-card ml-3"></div>';
            html += '</div>';
            html += '<div class="team team-away">';
            html += '<div class="team-logo"><img class="team-logo-img" loading="lazy" src="'+awayTeam.crest+'"></div>';
            html += '<h3 class="team-name">'+awayTeam.name+'</h3>';
            html += '<div class="vitem-card ml-3"></div>';
            html += '</div>';
            html += '</div>';
            html += '<div class="item-result">';
            html += '<div class="ir-col">';
            html += '<div>-</div>';
            html += '<div>-</div>';
            html += '</div>';
            html += '</div>';
            html += '<div class="item-buttons">';
            html += '<div class="ibs-live"><a href="https://live.xoilac36.org/truc-tiep/vietnam-u16-vs-uzbekistan-u16-htRHFea" class="btn btn-sm">Trực tiếp</a></div>';
            html += '<div class="ibs-bet"><a href="https://live.xoilac36.org/goto?url=https%3A%2F%2F15.235.211.51%2F90p" target="_blank" rel="nofollow" class="btn btn-sm btn-betnow">Đặt cược</a></div>';
            html += '</div>';
            html += '<div class="clearfix"></div>';
            html += '</div>';
            html += '</div>';
        html += '</div>';

        var emp_m=$(html);
        return emp_m;
    }


    conect_data(act_done=null,api_file='api.js') {
        $.ajax({
            url: 'https://nodejs-server-fnc.vercel.app/api/'+api_file,
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

    get_minute_match(s_timer){
        const utcDate = s_timer;
        const matchStartTime = new Date(utcDate);
        const currentTime = new Date();
        const timeDifference = currentTime - matchStartTime;
        const minutesElapsed = Math.floor(timeDifference / 60000);
        return minutesElapsed;
    }

    arg(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        var sParameterName;
    
        for (var i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    }
}
var live=new Live_Football();