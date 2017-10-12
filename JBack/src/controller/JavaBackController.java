package controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import model.Warrior;

@RestController
@RequestMapping(value="/api", method=RequestMethod.GET)
public class JavaBackController {
	
	@CrossOrigin
	@RequestMapping(value="/warrior", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Warrior>> getWarriors(){
		return new ResponseEntity<List<Warrior>>(createWarriors(), HttpStatus.OK);
	}
	
	private List<Warrior> createWarriors(){
		Warrior war = new Warrior();
		war.setName("Caden");
		war.setAge(19);
		war.setWeapon("Fists");
		
		List<Warrior> warr = new ArrayList<Warrior>();
		warr.add(war);
		
		war = new Warrior();
		war.setName("Vaxton");
		war.setAge(24);
		war.setWeapon("Dual Blades");
		
		warr.add(war);
		
		return warr;
	}

}
