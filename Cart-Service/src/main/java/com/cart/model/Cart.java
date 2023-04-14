package com.cart.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@Document(collection = "cart")
public class Cart {
	
	@Id
	private String cartId;
	private double totalPrice;
	private List<Items> items;
	
	public Cart(String cartId, double totalPrice, List<Items> items) {
		super();
		this.cartId = cartId;
		this.totalPrice = totalPrice;
		this.items = items;
	}
	//public Cart(String userId, int i, ArrayList<Items> arrayList) {
		// TODO Auto-generated constructor stub
	//}
	public String getCartId() {
		return cartId;
	}
	public void setCartId(String cartId) {
		this.cartId = cartId;
	}
	public double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}
	public List<Items> getItems() {
		return items;
	}
	public void setItems(List<Items> items) {
		this.items = items;
	}
	
	
}
