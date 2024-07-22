package com.alibou.book;

import com.alibou.book.auth.AuthenticationService;
import com.alibou.book.user.User;
import com.alibou.book.user.UserRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;


import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;


@SpringBootTest
class BookNetworkApiApplicationTests {

//	@Mock
//	private UserRepository userRepository;
//
//	@InjectMocks
//	private AuthenticationService authenticationService;
//
//	@BeforeEach
//	public void setUp() {
//		MockitoAnnotations.openMocks(this);
//	}
//	@Test
//	public void testListUsers() throws MessagingException {
//		User user1 = new User(1, "John Doe");
//		User user2 = new User(2, "Jane Doe");
//
//		when(userRepository.findAll()).thenReturn(Arrays.asList(user1, user2));
//
//		List<User> users = authenticationService.listusers();
//
//		assertNotNull(users);
//		assertEquals(2, users.size());
//		assertEquals("John Doe", users.get(0).getName());
//		assertEquals("Jane Doe", users.get(1).getName());
//
//		verify(userRepository, times(1)).findAll();
//	}


//	@Test
//	 void testListUsers()  {
//		// Arrange
//		List<User> expectedSuppliers = new ArrayList<>();
//		expectedSuppliers.add(new User());
//		expectedSuppliers.add(new User());
//
//
//		when(userRepository.findAll()).thenReturn(expectedSuppliers);
//
//		// Act
//		List<User> actualUser = authenticationService.listusers();
//
//
//		// Assert
//		assertEquals(expectedSuppliers, actualUser);
//		verify(userRepository, times(1)).findAll();
//
//	}
	@Test
	void contextLoads() {
	}

}
