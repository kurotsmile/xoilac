class Post_Field{
    label="Field Name";
    id="field_id";
    value="";
}

class Post{
    id_collection="";
    label="Post new";
    data_form_add={};

    show_form_add(){
        var html='';
        let fields=this.data_form_add.fields;
        $.each(fields)
    }
}

class CMS{
    id_project="";
    api_key="";

    list_post=[];
    index_post_cur=0;

    add(p){
        this.list_post.push(p);
    }

    onLoad(){
        $("#list_post").html('');
        $.each(this.list_post,function(index,p){
            var emp_post=$('<li class="nav-item"><a class="nav-link '+(cms.index_post_cur===index ? "active":"")+'" aria-current="page" href="#"><span data-feather="home"></span> '+p.label+'</a></li>');
            $("#list_post").append(emp_post);
        });
    }
}
var cms=new CMS();