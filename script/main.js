window.onload = function(){
    //슬라이드 기능
    let main_btn_prev = document.querySelector(".main_btn_prev")
    let main_btn_next = document.querySelector(".main_btn_next")
    let slider = document.querySelector(".main_train")
    let main_cur_slide = document.querySelector(".main_cur_slide")
    let count = 0
    main_btn_prev.addEventListener("click",function(){
        count--
        if(count<0){count=0}
        slider.style.transform = `translateX(${-50*count}%)`
        main_cur_slide.innerHTML = count+1
    })
    main_btn_next.addEventListener("click",function(){
        count++
        if(count>1){count=1}
        slider.style.transform = `translateX(${-50*count}%)`
        main_cur_slide.innerHTML = count+1
    })

    let btn_prev = document.querySelector(".btn_prev")
    let btn_next = document.querySelector(".btn_next")
    let story_slider = document.querySelector(".support_train")
    let sup_cur_slide = document.querySelector(".sup_cur_slide")
    let sup_count = 0
    btn_prev.addEventListener("click",function(){
        sup_count--
        if(sup_count<0){sup_count=0}
        story_slider.style.transform = `translateX(${-25*sup_count}%)`
        sup_cur_slide.innerHTML = sup_count+1
    })
    btn_next.addEventListener("click",function(){
        sup_count++
        if(sup_count>3){sup_count=3}
        story_slider.style.transform = `translateX(${-25*sup_count}%)`
        sup_cur_slide.innerHTML = sup_count+1
    })
}

