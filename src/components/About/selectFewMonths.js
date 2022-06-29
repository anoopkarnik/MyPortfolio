const selectFewMonths = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 3;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  export default selectFewMonths