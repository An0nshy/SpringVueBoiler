package de.macroblocks.spring.vuejs.controllers;

import de.macroblocks.spring.vuejs.payload.response.MessageResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ViewController {

    @GetMapping("/view")
    public ModelAndView view() {
        MessageResponse response = new MessageResponse("test");
        return new ModelAndView("/vue/index")
                .addObject(response);
    }

    @GetMapping("/user")
    public ModelAndView user() {
        MessageResponse response = new MessageResponse("test");
        return new ModelAndView("/vue/user")
                .addObject("message", "test");
    }
}
