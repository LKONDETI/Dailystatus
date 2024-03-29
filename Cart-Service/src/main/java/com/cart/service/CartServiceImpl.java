package com.cart.service;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.DoubleStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.cart.model.Cart;
import com.cart.model.Items;
import com.cart.model.ProductDetail;
import com.cart.repository.CartRepository;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	CartRepository cartRepo;

	@Autowired
	RestTemplate restTemplate;

	@Override
	public Cart getCartById(String id) {
		return cartRepo.findBycartId(id);
	}

	@Override
	public List<Cart> getAllCarts() {
		return cartRepo.findAll();
	}

	@Override
	public void addCart(String userId) {
		cartRepo.save(new Cart(userId, 0, new ArrayList<Items>()));
	}

	@Override
	public Cart addToCart(Items item, String userId) {
		boolean isQuantityUpdated = false;
		Cart cartFromDb = cartRepo.findBycartId(userId);
		item = getPriceOfItem(item);
		
		for(Items dbCartItem: cartFromDb.getItems())
		{
			if(item.getProductId().equals(dbCartItem.getProductId()))
			{
				dbCartItem.setQuantity(item.getQuantity()+dbCartItem.getQuantity());
				isQuantityUpdated = true;
				break;
			}
		}
		
		if(isQuantityUpdated == false)
		{
			cartFromDb.getItems().add(item);
			cartFromDb.setItems(cartFromDb.getItems());
		}
		cartFromDb.setTotalPrice(cartTotal(cartFromDb));
		return cartRepo.save(cartFromDb);
	}
	
	@Override
	public Cart updateCart(Cart tempCart) {
		tempCart = getPriceOfItems(tempCart);
		tempCart.setTotalPrice( cartTotal(tempCart));
		return cartRepo.save(tempCart);
	}


	// helper Methods --------------------------------------------------------------------
	@Override
	public double cartTotal(Cart cart) {
	double totalCartValue = cart.getItems().stream().flatMapToDouble(i -> DoubleStream.of(i.getPrice()*i.getQuantity())).sum();
		return totalCartValue;
	}
	
	private Cart getPriceOfItems(Cart cart) {
		cart.getItems().stream().forEach(i -> {
			i.setPrice(getDeocodedUrl(i).getPrice());
			i.setProductId(getDeocodedUrl(i).getProductId());
		});
		cart.setTotalPrice( cartTotal(cart));
		return cart;
	}
	
	private Items getPriceOfItem(Items item) {
		item.setProductId(getDeocodedUrl(item).getProductId());
		item.setPrice(getDeocodedUrl(item).getPrice());
		item.setImage(getDeocodedUrl(item).getImage());
		return item;
	}
	
	private ProductDetail getDeocodedUrl(Items item) {
		String decodedUrl = "";
		try {
			decodedUrl = URLDecoder.decode("http://product-service/product/getProduct/name/" + item.getProductName(),
					"UTF-8");
		} catch (UnsupportedEncodingException e) {
			System.out.println("URL DECODING FAILED");
			e.printStackTrace();
		}
		return this.restTemplate.getForObject(decodedUrl, ProductDetail.class);
	}
}
