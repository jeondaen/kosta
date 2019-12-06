package agn.model;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MCalendar {
	//현재 년, 달, 일, 시작 일, 주의 몇번째 일(?) 어떤 객체로 들어오든 가공해서 배출가능해야함
	
	private int year;
	private int month;
	private int date; // 시스템상 현재 날짜
	private int requestDate;	// 요청 날짜
	private int dayOfFirstWeek;	// 첫주의 시작 날짜 번호
	private int dayOfDateWeek;	// 현재 주의 시작 날짜 번호
	private int daysOfMonth;	//	한달의 총 날짜 수
	private int weekOfYear;
	private int duration; 	// 할일이 지속되는 기간
	private int hour;
	private int minute;
	
	private Map<String, List<Card>> cap;
	
	public MCalendar () {}	//기본 생성자
	
	public MCalendar (Calendar calendar) { 								// 캘린더 객체를 받았을 때-------------
		super();
		this.year = calendar.get(Calendar.YEAR);
		this.month = calendar.get(Calendar.MONTH);
		this.date = calendar.get(Calendar.DATE);
		
		setMonthDays(this.year, this.month);
		this.dayOfDateWeek = calendar.get(Calendar.DAY_OF_WEEK);
		
		this.hour = calendar.get(Calendar.HOUR_OF_DAY);
		this.minute = calendar.get(Calendar.MINUTE);
		this.weekOfYear = calendar.get(Calendar.WEEK_OF_YEAR);
	}
	
	public MCalendar (Calendar calendar, List<Card> listCard) {
		this(calendar);
		
		List<Card> cardList = null;
		this.cap = new HashMap<String, List<Card>>();
		
		try {
			for(Card p : listCard) {
				
				
			}
			
		} catch (Exception e) {
			System.out.println("생성자(Calendar, List<Card>) 에러");
			e.printStackTrace();
		}
		

	}
	
	public MCalendar (Calendar calendar, int requestDate) {		// ------------- CALENDAR 객체와 requestDate ---------
		this(calendar);
		this.requestDate = requestDate;
	}
	
	public MCalendar (Date date) {								// --------------DATE 객체가 들어왔을 때 -----------
		String [] months = {"Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"};
		
		String [] dates = date.toString().split(" ");
		int month=0;
		for(int i=0; i<months.length; i++) {
			if(months[i].equals(dates[1])) month = i; 
		}
		
		this.year = Integer.parseInt(dates[5]);
		this.month = month;
		this.date = Integer.parseInt(dates[2]);
		
		setMonthDays(this.year, this.month);
		
		setDayOfDateWeek(this.year, this.month, this.date);
		
		this.hour = Integer.parseInt(dates[2].substring(0,2)); 
		this.minute = Integer.parseInt(dates[2].substring(3, 5));
	}
	
	public MCalendar (String s) {
		// 19/11/11 8개, 19-02-04, 2019/11/12 10개, 2019-04-23 10개, 2019-01-31T12:59 16개
		
		if(s.length() == 8) {
			
			if(s.contains("/")) {
				
				setStringToDate(s, "/");
				
			}else if(s.contains("-")) {
				
				setStringToDate(s, "-");
				
			}
			
		}else if(s.length() == 10) {
			
			if(s.contains("/")) {
				
				setStringToDate(s, "/");
				
			}else if(s.contains("-")) {
				
				setStringToDate(s, "-");
				
			}
			
		}else if(s.length() == 16) {
			
			try {
				setStringToDate(s.substring(0, 10), "-");
				setMonthDays(this.year, this.month);
				setDayOfDateWeek(this.year, this.month, this.date);
				
				String[] times = s.substring(11).split(":");
				
				this.hour = Integer.parseInt(times[0]);
				this.minute = Integer.parseInt(times[1]);
				
			} catch (Exception e) {
				System.out.println("길이가 16이 맞는가?");
				e.printStackTrace();
			}
			
		}
		
		
	}
	
	private String setDateToString(Date date) {							// DATE 타입인 아이들을 String 타입으로 변환
		String stringDate = "";
		// 2019-11-01 처럼 0 이 앞에 붙은 것을 떼어주는 작업을 하자
		
		String[] q = date.toString().split("-");
		stringDate += q[0];
		stringDate += "-" + Integer.parseInt(q[1]);
		stringDate += "-" + Integer.parseInt(q[2]);
		return stringDate;
	}
	
	private void setStringToDate(String s, String seq) {				// 스트링 타입으로 설정된 날짜를 날짜 타입으로 변환
		if(s != null) {
			String [] dates = s.split(seq);
			
			try {
				
				this.year = Integer.parseInt(dates[0]);
				this.month = Integer.parseInt(dates[1]);
				this.date = Integer.parseInt(dates[2]);
				
			} catch (Exception e) {
				System.out.println("setStringToDate 메서드 에러");
				e.printStackTrace();
			}
		}
	}
	
	
	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	private void setDayOfDateWeek(int year, int month, int date) {		// 현재 주의 시작날짜를 알고싶을 때
		Calendar calendar = new GregorianCalendar(year, month, date);
		
		this.dayOfDateWeek = calendar.get(Calendar.DAY_OF_WEEK);
		this.weekOfYear = calendar.get(Calendar.WEEK_OF_YEAR);
	}
	
	private void setMonthDays(int year, int month) {				// ------------- 주어진 달의 시작 날짜 순서와, 달의 총 일자를 구하는 메서드 ----------
		
		Calendar calendar = new GregorianCalendar(year, month, 1);
		
		this.dayOfFirstWeek = calendar.get(Calendar.DAY_OF_WEEK);
		this.daysOfMonth = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);
		
	}
	
	public int getWeekOfYear() {
		return weekOfYear;
	}

	public void setWeekOfYear(int weekOfYear) {
		this.weekOfYear = weekOfYear;
	}

	public Map<String, List<Card>> getCap() {
		return cap;
	}
	
	public void setCap(Map<String, List<Card>> cap) {
		this.cap = cap;
	}
	
	public int getHour() {
		return hour;
	}
	
	public void setHour(int hour) {
		this.hour = hour;
	}
	
	public int getMinute() {
		return minute;
	}
	
	public void setMinute(int minute) {
		this.minute = minute;
	}
	
	public int getDaysOfMonth() {
		return daysOfMonth;
	}
	
	public void setDaysOfMonth(int daysOfMonth) {
		this.daysOfMonth = daysOfMonth;
	}
	
	public int getDayOfFirstWeek() {
		return dayOfFirstWeek;
	}
	
	public void setDayOfFirstWeek(int dayOfFirstWeek) {
		this.dayOfFirstWeek = dayOfFirstWeek;
	}
	
	public int getDayOfDateWeek() {
		return dayOfDateWeek;
	}
	
	public void setDayOfDateWeek(int dayOfDateWeek) {
		this.dayOfDateWeek = dayOfDateWeek;
	}
	
	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}
	
	public int getMonth() {
		return month;
	}
	
	public void setMonth(int month) {
		this.month = month;
	}

	public int getDate() {
		return date;
	}

	public void setDate(int date) {
		this.date = date;
	}

	public int getRequestDate() {
		return requestDate;
	}

	public void setRequestDate(int requestDate) {
		this.requestDate = requestDate;
	}

}
