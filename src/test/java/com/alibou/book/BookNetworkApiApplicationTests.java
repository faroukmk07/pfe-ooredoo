package com.alibou.book;

import com.alibou.book.auth.AuthenticationService;
import com.alibou.book.user.User;
import com.alibou.book.user.UserRepository;
import jakarta.mail.MessagingException;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;


import java.util.Arrays;
import java.util.List;

import static org.hibernate.validator.internal.util.Contracts.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;


@SpringBootTest
class BookNetworkApiApplicationTests {

	@Mock
	private UserRepository userRepository;

	@InjectMocks
	private AuthenticationService authenticationService;

	@BeforeEach
	public void setUp() {
		MockitoAnnotations.openMocks(this);
	}
	@Test
	public void testListUsers() throws MessagingException {
		User user1 = new User(1, "John Doe");
		User user2 = new User(2, "Jane Doe");

		when(userRepository.findAll()).thenReturn(Arrays.asList(user1, user2));

		List<User> users = authenticationService.listusers();

		assertNotNull(users);
		assertEquals(2, users.size());
		assertEquals("John Doe", users.get(0).getName());
		assertEquals("Jane Doe", users.get(1).getName());

		verify(userRepository, times(1)).findAll();
	}
	@Test
	void contextLoads() {
	}

}
