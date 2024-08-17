class App{

    s_class_banner_home=["","bet","bet3","bet4"];
    index_tip=0;

    onLoad(){
        this.load_info_home();
        this.load_banner_home();
        this.load_blv();
        this.load_tip_home();
        this.conect_data();
    }

    load_info_home(){
        cr_firestore.get("setting","setting_home",(data)=>{
            $("#logo_home_page").attr("src",data.logo);
            $("#title_home_page").html(data.title);
            $("#subtitle_home_page").html(data.subtitle);
            $("#title_blv").html(data.title_blv);
            $("#subtitle_blv").html(data.subtitle_blv);
            $("#banner_home").attr("src",data.banner_home);
            $("#banner_home_title").html(data.banner_home_title);
            $("#banner_home_tip").html(data.banner_home_tip);
        },()=>{
            app.load_info_home();
        });
    }

    conect_data() {
        const url = 'https://api-v1.zetcdn.site/Api';
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Token': '3ce020b50866983840c6f018c7fdf666'
        };
        const body = 'type=1';

        fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.error('Error:', error));

        $.ajax({
            url: 'https://api-v1.zetcdn.site/Api',
            type: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded',
                'token': 'd2113c935858e80fcf8879ab3c07530d'
            },
            data: {
                type: 1
            },
            success: function (response) {
                alert(JSON.stringify(response));
                console.log('Phản hồi từ server:', response);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Lỗi:', textStatus, errorThrown);
                console.log(jqXHR);
                console.log(errorThrown);
            }
        });
    }

    load_blv(){
        cr_firestore.list("blv",(data)=>{
            var list_blv=data.sort(function(a,b){
                return a.order - b.order;
            });
            $("#list_blv_row_1").html('');
            $("#list_blv_row_2").html('');
            let length_post=data.length;
            let div_post=length_post/2;
            $.each(list_blv,function(index,b){
                b["index"]=index;
                if(index<div_post-1){
                    $("#list_blv_row_1").append(app.box_item_blv(b));
                }else{
                    $("#list_blv_row_2").append(app.box_item_blv(b));
                }
            });
        },()=>{
            app.load_blv();
        });
    }

    box_item_blv(data){
        var html='<div class="media"><img class="lzl" src="'+data.avatar+'" alt="" width="63" height="63"><div class="media-body">'+data.name+'</div></div>';
        return html;
    }

    load_tip_home(){
        cr_firestore.list("tip",(data)=>{
            var list_tip=data.sort(function(a,b){
                return a.order - b.order;
            });
            $.each(list_tip,function(index,t){
                var item_title_tip=$('<li '+(app.index_tip===index ? 'class="active"':"")+'><a href="#xoilactv'+index+'" class="nav-item">'+t.title+'</a></li>');
                $("#list_tip_title").append(item_title_tip);
                var html_body='';
                html_body+='<h4 id="xoilactv'+index+'">'+t.title+'</h4>';
                html_body+=t.body;
                $("#list_tip_body").append(html_body);
            });
        });
    }

    load_banner_home(){
        cr_firestore.list("banner",(data)=>{
            $("#main_banner_left").html('');
            $("#main_banner_right").html('');
            let length_post=data.length;
            let div_post=length_post/2;
            var list_p=data.sort(function(a,b){
                return a.order - b.order;
            });
            $.each(list_p,function(index,p){
                p["index"]=index;
                if(index<div_post){
                    $("#main_banner_left").append(app.banner_item(p));
                }else{
                    $("#main_banner_right").append(app.banner_item(p));
                }
            });
        });
    }

    banner_item(data_p){
        var html='';
        var s_class_btn='';
        var index=parseInt(data_p["index"]);
        if(app.s_class_banner_home[index]!=null) s_class_btn=app.s_class_banner_home[index];
        html+='<div class="group-link link'+data_p["index"]+'">';
            html+='<a href="'+data_p["link"]+'" target="_blank" class="ref-link" rel="nofollow"></a>';
            html+='<img class="lzl" src="'+data_p["image"]+'" height="67" alt="Xem bóng đá Xoilac" rel="nofollow">';
            html+='<p>'+data_p["label"]+'</p>';
            html+='<a href="" class="btn btn-main '+s_class_btn+'" target="_blank" rel="nofollow">'+data_p["btn_text"]+'</a>';
        html+='</div>';
        return $(html);
    }
}

var app=new App();