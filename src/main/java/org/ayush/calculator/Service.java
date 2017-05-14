package org.ayush.calculator;

public class Service {

	public double performOperation(double first, String operator, double second) {
		if(operator.equals("+"))
			return first + second;
		else if(operator.equals("-"))
			return first - second;
		else if(operator.equals("*"))
			return first * second;
		else 
			return first / second;
	}
}
