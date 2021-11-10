import { $ }  from 'react-jquery-plugin'

export const removeModal = (id)=>{  
    $(`#${id}`).hide();
    $(`#${id}`).addClass("hideImportant");
    $(`#${id}`).removeClass("show")
    $('.modal-backdrop').hide();
    $('.modal').hide();
    $('.c_modal').hide();  
    return false;
  }