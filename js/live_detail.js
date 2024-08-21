class Live_Detail{

    show(data_m){
        var area=data_m.area;
        var awayTeam=data_m.awayTeam;
        var homeTeam=data_m.homeTeam;
    
        let homeGoals = data_m.score.fullTime.home;
        let awayGoals = data_m.score.fullTime.away;
        
        var title_page="Xoilac TV trực tiếp trận đấu: "+awayTeam.name+" vs "+homeTeam.name;
    
        if(homeGoals==null) homeGoals=0;
        if(awayGoals==null) awayGoals=0;
        $("#title_page").html(title_page);
        cr.setTitleAndURL(title_page,cr.site_url+"?page=live&id="+data_m.id);

        var s_time_loaded='';
        if(data_m.status=="IN_PLAY"){
            s_time_loaded='<span>'+live.get_minute_match(data_m.utcDate)+'\'</span>';
        }

        var html=$(`
            <div class="match-box">
            <div class="match-detail">
                <div class="item">
                <div class="team team-home">
                    <a href="javascript:;" class="team-logo">
                    <img class="team-logo-img" loading="lazy" src="${homeTeam.crest}" onerror="this.src='/images/1.gif';">
                    </a>
                    <h3 class="team-name">
                    <a href="javascript:;" title="">
                        <span class="v-center">${homeTeam.name}</span>
                    </a>
                    </h3> n
                </div>
                <div class="item-info">
                    <a href="/giai-dau/dfb-pokal-rSZalgE" class="item-league">
                    <i class="league-icon mr-2">
                        <img loading="lazy" src="${area.flag}">
                    </i>${area.name}
                    </a>
                    <div class="result">
                    <span>${homeGoals}</span><span>-</span><span>${awayGoals}</span>
                    </div>
                    <div class="time-loaded">${s_time_loaded}</div>
                </div>
                <div class="team team-away">
                    <a href="javascript:;" class="team-logo">
                    <img class="team-logo-img" loading="lazy" src="${awayTeam.crest}" onerror="this.src='/images/1.gif';">
                    </a>
                    <h3 class="team-name">
                    <a href="javascript:;" title="">
                        <span class="v-center">${awayTeam.name}</span>
                    </a>
                    </h3>
                </div>
                <div class="clearfix"></div>
                </div>
            </div>
            <div class="match-content">
                <div class="mc_live_wrap">
                <div id="live_full" class="mc_live">
                    <div class="mc_l-left">
                    <div class="mcb_-linksz">
                        <a href="/goto?url=https%3A%2F%2F15.235.211.51%2F90p" target="_blank" class="sv-link btn-bet-top">Đặt cược UY TÍN</a>
                    </div>
                    <div class="mc_top w-social" style="height: auto;">
                        <div class="mcb_-links">
                        <a href="javascript:void(0)" class="sv-link"><i class="fas fa-caret-right mr-1"></i>Mô Phỏng</a>
                        <a href="javascript:void(0)" class="sv-link active"><i class="fas fa-caret-right mr-1"></i>SD1</a>
                        <a href="javascript:void(0)" class="sv-link"><i class="fas fa-caret-right mr-1"></i>SD2</a>
                        <a href="javascript:void(0)" class="sv-link"><i class="fas fa-caret-right mr-1"></i>HD</a>
                        <a href="javascript:void(0)" class="sv-link"><i class="fas fa-caret-right mr-1"></i>FullHD</a>
                        <a href="javascript:void(0)" class="sv-link"><i class="fas fa-caret-right mr-1"></i>Backup 1</a>
                        <div class="clearfix"></div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div id="vbplayer" class="vb-player">
                        <div id="jw-container">
                        <iframe src="https://t.fdcdn.xyz/v11/?id=SS2k4AP&amp;theme_id=xoilac&amp;t=1&amp;n=SD1&amp;c=21&amp;link=https%3A%2F%2Fvb90xltcvg-secure.nsnd.live%2FQIhhKisG1zIECmtbDqf89w%2F14e4f98ccbd756c5f3bea3c8e54c402b%2F1724003256%2Flive%2F_definst_%2Fstream_1_1bda7%40mySD%2Fplaylist.m3u8" width="100%" height="100%" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" allowfullscreen="" scrolling="auto"></iframe>
                        </div>
                    </div>
                    <div class="mc_bottom">
                        <div class="mct_-blv">
                        <a class="bbox" href="https://www.facebook.com/profile.php?id=100091927295113" target="_blank">
                            <div class="user-avatar">
                            <img loading="lazy" src="https://image-eu-na-ctnytbefjq.4shares.live/90link/blv/MyTom.png" alt="Mỳ Tôm" title="Mỳ Tôm">
                            </div>
                            <div class="mct__-info">
                            <div class="title">Bình luận viên</div>
                            <div class="name">Mỳ Tôm</div>
                            </div>
                            <div class="mct__-icon"><i class="fas fa-microphone"></i></div>
                            <div class="clearfix"></div>
                        </a>
                        </div>
                        <div class="mct_-bet">
                        <a href="/goto?url=https%3A%2F%2F15.235.211.51%2F90p" target="_blank" rel="nofollow" class="item item-betnow"><i class="fas fa-futbol"></i><span>Đặt cược</span> trận này </a>
                        <a href="#" class="item item-mobile"><i class="fas fa-mobile"></i><span>Trực tiếp</span> trên đ.thoại </a>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    </div>
                    <div class="mc_l-right m-height">
                    <div class="vb-button">
                        <div class="mct_-bet">
                        <a href="/goto?url=https%3A%2F%2F15.235.211.51%2F90p" target="_blank" rel="noopener nofollow" class="item item-soikeo"><i class="fas fa-search"></i><span>Soi kèo</span> trận này </a>
                        <a href="/goto?url=https%3A%2F%2F15.235.211.51%2F90p" target="_blank" rel="noopener nofollow" class="item item-tyle"><i class="fas fa-percentage"></i><span>Tỷ lệ</span> trận này </a>
                        </div>
                    </div>
                    <div class="vb-chatbox">
                        <div id="toggle-chat" class="close-chat"></div>
                        <div class="chatbox_wrap">
                        <div class="tab">
                            <button type="button" class="tablinks">Chung</button>
                            <button type="button" class="tablinks active">Trận đấu</button>
                        </div>
                        <div id="chat_all" class="tabcontent">
                            <div class="chatbox_hide">
                            <div class="chatbox_hide_before"></div>
                            <div class="_RCHKCT for-desktop">
                                <a href="/goto?url=https%3A%2F%2F15.235.211.51%2F90p" title="" target="_blank" rel="nofollow" style="width: 100%; display: block;">
                                <img alt="" src="https://image-eu-na-ctnytbefjq.4shares.live/90link/8/728ii90.gif" rel="nofollow" loading="lazy" style="width: 100%;">
                                </a>
                            </div>
                            </div>
                            <button class="btn for-desktop"><i class="fas fa-comments mr-2"></i>Xem bình luận</button>
                            <button id="goFS" class="btn for-mobile"><i class="fas fa-comments mr-2"></i>Xem bình luận </button>
                        </div>
                        <div id="chat_match" class="tabcontent active">
                            <div class="chatbox_hide">
                            <div class="chatbox_hide_before"></div>
                            <div class="_RCHKCT for-desktop">
                                <a href="/goto?url=https%3A%2F%2F15.235.211.51%2F90p" title="" target="_blank" rel="nofollow" style="width: 100%; display: block;">
                                <img alt="" src="https://image-eu-na-ctnytbefjq.4shares.live/90link/8/728ii90.gif" rel="nofollow" loading="lazy" style="width: 100%;">
                                </a>
                            </div>
                            </div>
                            <button class="btn for-desktop"><i class="fas fa-comments mr-2"></i>Xem bình luận</button>
                            <button id="goFS" class="btn for-mobile"><i class="fas fa-comments mr-2"></i>Xem bình luận </button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                </div>
            </div>
            </div>
        `);
        $("#box-content-trending").html(html);
    }

    show_by_id(id_match){
        live_detail.get_match_by_id(id_match,(data_m)=>{
            live_detail.show(data_m);
        });
    }

    get_match_by_id(id_math,act_done){
        $.ajax({
            url: 'https://nodejs-server-fnc.vercel.app/api/match.js?id='+id_math,
            type: 'GET',
            success: function (response) {
                console.log(response);
                if (act_done) act_done(response);
            },
            error: function (xhr, status, error) {
                console.error('Error Server:', error);
                alert("Error!!");
            }
        });
    }
}

var live_detail=new Live_Detail();