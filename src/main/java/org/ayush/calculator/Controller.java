package org.ayush.calculator;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
	
	 @Autowired
	 private HttpServletRequest request;
	 Service service = new Service();
	 
	 @RequestMapping(value = "/output/{first}/{operator}/{second}", method = RequestMethod.GET)
	 public double getOutput(@PathVariable("first") double first, @PathVariable("operator") String operator, @PathVariable("second") double second) {
	  
	  double output = service.performOperation(first, operator, second);
	  return output;
	 }

}
