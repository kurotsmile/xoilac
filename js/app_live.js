class App_Live{

    data_live=null;
    show(){
        $("#all_item_live").html('Loading...');
        if(localStorage.getItem("data_live_2"+app_live.get_hours())){
            app_live.data_live=JSON.parse(localStorage.getItem("data_live_"+app_live.get_hours()));
        }

        if(this.data_live==null){
            this.conect_data((data_live)=>{
                localStorage.setItem("data_live_2"+app_live.get_hours(),JSON.stringify(data_live));
                app_live.data_live=data_live;
                app_live.load_data();
            });
        }else{
            app_live.load_data();
        }
    }

    load_data(){
        console.log(app_live.data_live);
        var matches=app_live.data_live.matches;
        $("#all_item_live").html('');
        $.each(matches,function(index,m){
            $("#all_item_live").append(app_live.box_matches(m));
        });
    }

    box_matches(data_m){
        var area=data_m.area;
        var awayTeam=data_m.awayTeam;
        var homeTeam=data_m.homeTeam;
        var html_box='';
        html_box+='<div class="col text-black">';
          html_box+='<div class="card shadow-sm">';
            html_box+='<div class="card-body text-center">';
            html_box+='<div class="row">';
              html_box+='<div class="col-12">'+area.name+'</div>';
              html_box+='<div class="col-4"><img src="'+awayTeam.crest+'" class="w-50 rounded"></br>'+awayTeam.name+'</div>';
              html_box+='<div class="col-4">'+app_live.fomat_date_vi(data_m.utcDate)+'</br><span class="text-success">'+data_m.status+'</span></div>';
              html_box+='<div class="col-4"><img src="'+homeTeam.crest+'" class="w-50 rounded"></br>'+homeTeam.name+'</div>';
            html_box+='</div>';
              html_box+='<div class="d-flex justify-content-between align-items-center">';
                html_box+='<div class="btn-group">';
                  html_box+='<button type="button" class="btn btn-sm btn-outline-secondary">Trực tiếp</button>';
                  html_box+='<button type="button" class="btn btn-sm btn-outline-secondary">Đánh Dấu</button>';
                html_box+='</div>';
              html_box+='</div>';
            html_box+='</div>';
          html_box+='</div>';
        html_box+='</div>';

        var box_item=$(html_box);
        return box_item;
    }

    conect_data(act_done=null) {
        $.ajax({
            url: 'https://nodejs-server-fnc.vercel.app/api/api.js',
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
}
var app_live=new App_Live();