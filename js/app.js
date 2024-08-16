class App{

    s_class_banner_home=["","bet","bet3","bet4"];
    index_tip=0;

    onLoad(){
        this.load_banner_home();
        this.load_tip_home();
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