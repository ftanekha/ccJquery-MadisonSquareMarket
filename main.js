$(document).ready(
    ()=>{
        const dropdowns = ['#cart', '#account','#help']
        //make the corresponding drop-down menu appear
        for(let dropdown of dropdowns){
            $(dropdown).on('click', ()=>{
                $(`${dropdown} .dropdown-menu`).show()
            })
            //make the drop-down menu disappear on mouseleave
            $(`${dropdown} .dropdown-menu`).on('mouseleave', ()=>{
                $(`${dropdown} .dropdown-menu`).hide()
            })
        }
    }
)