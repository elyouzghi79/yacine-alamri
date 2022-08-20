document.addEventListener('DOMContentLoaded', function () {
  const tracksList = [
    {
      audioSrc:
        'https://ia903408.us.archive.org/24/items/22_20210218/%D8%A3%D9%82%D9%85%20%D8%B5%D9%84%D8%A7%D8%AA%D9%83..%20%D8%AA%D8%AD%D9%84%D9%88%20%D8%AD%D9%8A%D8%A7%D8%AA%D9%83%20%20%D8%B0.%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A%20%20yassine%20elamri.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ... ياسين العمري',
      desc: 'أقم صلاتك.. تحلو حياتك  ذ. ياسين العمري',
      id: 0,
    },
    {
      audioSrc:
        'https://ia903408.us.archive.org/24/items/22_20210218/%D8%A7%D8%AD%D8%B0%D8%B1..%20%D9%82%D8%AF%20%D8%AA%D8%B5%D9%81%20%D8%BA%D9%8A%D8%B1%D9%83%20%D8%A8%D8%A7%D9%84%D9%85%D9%86%D8%A7%D9%81%D9%82..%20%D9%88%D9%81%D9%8A%D9%83%20%D8%AE%D8%B5%D9%84%D8%A9%20%D9%85%D9%86%20%D8%AE%D8%B5%D9%84%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D9%81%D9%82%D9%8A%D9%86%20%20%D8%B0.%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A%20%20yassine%20elamri.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ... ياسين العمري',
      desc: 'احذر.. قد تصف غيرك بالمنافق.. وفيك خصلة من خصل المنافقين',
      id: 1,
    },
    {
      audioSrc: 'https://ia803408.us.archive.org/24/items/22_20210218/%D8%A7%D9%84%D8%AF%D8%B1%D8%B3%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9%20%D8%B9%D8%B4%D8%B1%D8%A5%D8%B3%D9%84%D8%A7%D9%85%20%D8%A7%D9%84%D9%81%D8%A7%D8%B1%D9%88%D9%82%20%D8%B9%D9%85%D8%B1%20%D9%88%D8%AD%D9%85%D8%B2%D8%A9%20%D9%88%D8%A3%D8%A8%D9%8A%20%D8%B0%D8%B1%D8%A7%D9%84%D8%BA%D9%81%D8%A7%D8%B1%D9%8A%D8%B0.%D9%8A%D8%A7%D8%B3%D9%8A%D9%80%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D9%80%D8%B1%D9%8A.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ... ياسين العمري',
      desc: 'إسلام الفاروق عمر وحمزة وأبي ذرالغفار',
      id: 2,
    },
    {
      audioSrc: "https://ia903408.us.archive.org/24/items/22_20210218/%D8%A7%D9%84%D8%B3%D9%8A%D8%B1%D8%A9%20%D8%A7%D9%84%D9%86%D8%A8%D9%88%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B7%D8%B1%D8%A9%20-%20%D8%A7%D9%84%D8%A3%D9%88%D8%B5%D8%A7%D9%81%20%D8%A7%D9%84%D8%AE%D9%84%D9%82%D9%8A%D8%A9%20%D9%84%D9%84%D9%86%D8%A8%D9%8A%20%D8%B5%D9%84%D9%89%20%D8%A7%D9%84%D9%84%D9%87%20%D8%B9%D9%84%D9%8A%D9%87%20%D9%88%D8%B3%D9%84%D9%85%20__%20%D9%84%D9%84%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.mp3",
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ... ياسين العمري',
      desc: "السيرة النبوية العطرة - الأوصاف الخلقية للنبي صلى الله عليه وسلم ",
      id: 3,
    },
    {
      audioSrc: 'https://ia803408.us.archive.org/24/items/22_20210218/%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8%20%D8%A8%D9%8A%D9%86%20%D8%B9%D9%88%D8%A7%D9%85%D9%84%20%D8%A7%D9%84%D9%86%D8%B5%D8%B1%20%D9%88%D8%A3%D8%B3%D8%A8%D8%A7%D8%A8%20%D8%A7%D9%84%D9%87%D8%B2%D9%8A%D9%85%D8%A9%20%20%D8%B0%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ.... ياسين العمري',
      desc: 'الشباب بين عوامل النصر وأسباب الهزيمة',
      id: 4,
    },
    {
      audioSrc:
        'https://ia803408.us.archive.org/24/items/22_20210218/%D8%A7%D9%84%D9%82%D9%84%D9%88%D8%A8%20%D8%AB%D9%84%D8%A7%D8%AB%D8%A9%20%D8%A3%D8%B5%D9%86%D8%A7%D9%81%D8%8C%20%D9%81%D9%82%D9%84%D8%A8%D9%83%20%D9%85%D9%86%20%D8%A3%D9%8A%20%D8%B5%D9%86%D9%81%D8%9F%20%20%D8%B0.%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A%20%20yassine%20elamri.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ.... ياسين العمري',
      desc: 'القلوب ثلاثة أصناف، فقلبك من أي صنف؟',
      id: 5,
    },
	{
      audioSrc:
        'https://ia803408.us.archive.org/24/items/22_20210218/%D8%A7%D9%8A%D8%A7%D9%83%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A7%D9%85.%20....%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%A7%D8%AF%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ.... ياسين العمري',
      desc: 'اياك المال الحرام',
      id: 6,
    },
	{
      audioSrc:
        'https://ia803408.us.archive.org/24/items/22_20210218/%D8%AA%D9%8F%D8%A8%20%D8%A5%D9%84%D9%89%20%D8%A7%D9%84%D9%84%D9%87%20%D8%A8%D8%B5%D8%AF%D9%82%28%D8%AF%D9%85%D9%88%D8%B9%20%D8%BA%D8%A7%D9%84%D9%8A%D8%A9%29%D8%8C%20%D8%A7%D9%84%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ... ياسين العمري',
      desc: 'تُب إلى الله بصدق(دموع غالية)',
      id: 7,
    },
	{
      audioSrc:
        'https://ia803408.us.archive.org/24/items/22_20210218/%D8%AB%D9%85%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D9%8A%D9%85%D8%A7%D9%86%20%D8%A8%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D9%82%D8%AF%D8%B1%20%20%D8%B0.%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A%20%20yassine%20elamri.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ... ياسين العمري',
      desc: 'ثمرات الإيمان بالقضاء والقدر',
      id: 8,
    },
	{
      audioSrc:
        'https://ia803408.us.archive.org/24/items/22_20210218/%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%B3%D9%81%D9%8A%D9%86%D8%A9%20%D8%8C%20%D8%AF%D8%B1%D9%88%D8%B3%20%D9%88%20%D8%B9%D8%A8%D8%B1%20%D9%84%D9%84%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ... ياسين العمري',
      desc: 'حديث السفينة ، دروس و عبر',
      id: 9,
    },
	{
      audioSrc:
        'https://ia803408.us.archive.org/24/items/22_20210218/%D8%B0.%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A%20%D8%AE%D8%B7%D8%B1%20%D8%A7%D9%84%D8%B4%D8%B1%D9%83%20%D9%88%D8%A7%D9%84%D8%B4%D8%B9%D9%88%D8%B0%D8%A9%20%D9%81%D9%8A%20%D8%B9%D8%A7%D8%B4%D9%88%D8%B1%D8%A7%D8%A1.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ.... ياسين العمري',
      desc: 'خطر الشرك والشعوذة في عاشوراء',
      id: 10,
    },
	{
      audioSrc:
        'https://ia803408.us.archive.org/24/items/22_20210218/%D8%B4%D8%A7%D9%87%D8%AF%20%20%D9%83%D9%8A%D9%81%20%D8%AA%D8%AC%D8%B9%D9%84%20%D9%84%D9%84%D9%82%D8%B1%D8%A2%D9%86%20%D8%AA%D8%A3%D8%AB%D9%8A%D8%B1%D8%A7%20%D9%81%D9%8A%20%D8%AD%D9%8A%D8%A7%D8%AA%D9%83%21%20%20%D8%B0%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A%20%20Al%20Quran%20%20yassine%20elamri.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ... ياسين العمري',
      desc: 'شاهد  كيف تجعل للقرآن تأثيرا في حياتك! ',
      id: 11,
    },
	{
      audioSrc:
        'https://ia903408.us.archive.org/24/items/22_20210218/%D8%B4%D8%A8%D8%A7%D8%A8%20%D8%AD%D9%88%D9%84%20%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%84%D8%8C%20%D9%85%D8%AD%D8%A7%D8%B6%D8%B1%D8%A9%20%D9%85%D8%A7%D8%AA%D8%B9%D8%A9%20%D9%84%D9%84%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%20%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A%20%20The%20Youth%20With%20The%20Messenger%20-%20yassine%20elamri.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ... ياسين العمري',
      desc: 'شباب حول الرسول',
      id: 12,
    },
	{
      audioSrc:
        'https://ia803408.us.archive.org/24/items/22_20210218/%D8%B9%D9%84%D9%85%20%D8%A3%D8%A8%D9%86%D8%A7%D8%A1%D9%83%20%D8%A7%D9%84%D8%AD%D8%A8%20%D9%82%D8%A8%D9%84%20%D8%A3%D9%86%20%D9%8A%D8%AA%D8%B9%D9%84%D9%85%D9%88%D9%87%20%D9%85%D9%86%20%D8%A7%D9%84%D8%A3%D9%81%D9%84%D8%A7%D9%85%20%20%D8%B0.%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A%20%20yassine%20elamri.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ.... ياسين العمري',
      desc: 'علم أبناءك الحب قبل أن يتعلموه من الأفلام ',
      id: 13,
    },
	{
      audioSrc:
        'https://ia803408.us.archive.org/24/items/22_20210218/%D9%81%D8%B6%D9%84%20%D8%A7%D9%84%D8%B5%D8%AF%D9%82%D8%A9%20%D8%A7%D9%84%D8%AC%D8%A7%D8%B1%D9%8A%D8%A9%20%20%D8%B0.%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A%20%20yassine%20elamri.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ... ياسين العمري',
      desc: 'فضل الصدقة الجارية',
      id: 14,
    },
	{
      audioSrc:
        'https://ia803408.us.archive.org/24/items/22_20210218/%D9%82%D8%B5%D8%A9%20%D8%AA%D9%88%D8%A8%D8%A9%20%D8%AB%D9%85%D8%A7%D9%85%D8%A9%20%D8%A3%D9%83%D8%A8%D8%B1%20%D8%B9%D8%AF%D9%88%20%D9%84%D9%84%D9%86%D8%A8%D9%8A%20%EF%B7%BA%20%D8%A7%D9%84%D8%AA%D9%8A%20%D8%A3%D8%A8%D9%83%D8%AA%20%D8%A7%D9%84%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ.... ياسين العمري',
      desc: 'قصة توبة ثمامة أكبر عدو للنبي ﷺ',
      id: 15,
    },
	{
      audioSrc:
        'https://ia803408.us.archive.org/24/items/22_20210218/%D9%84%D9%85%D9%86%20%D9%8A%D8%AE%D8%A7%D9%81%20%D9%85%D9%86%20%D8%A7%D9%84%D8%AC%D9%86..%20%D8%A7%D9%84%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A%20%D8%AD%D9%81%D8%B8%D9%87%20%D8%A7%D9%84%D9%84%D9%87%F0%9F%A4%8E.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ....ياسين العمري',
      desc: 'لمن يخاف من الجن',
      id: 16,
    },
	{
      audioSrc:
        'https://ia803408.us.archive.org/24/items/22_20210218/%D9%85%D8%AD%D8%A7%D8%B6%D8%B1%D8%A9%20%D8%A7%D9%84%D8%A3%D8%AE%D9%84%D8%A7%D9%82%20%D8%A7%D9%84%D8%AA%D9%8A%20%D9%86%D8%B1%D9%8A%D8%AF%20%20%D9%84%D9%84%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%20%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A%20%20yassine%20elamri.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ... ياسين العمري',
      desc: 'محاضرة الأخلاق الت',
      id: 17,
    },
	{
      audioSrc:
        'https://ia803408.us.archive.org/24/items/22_20210218/%D9%85%D8%AD%D8%A7%D8%B6%D8%B1%D8%A9%20%D8%A8%D8%B9%D9%86%D9%88%D8%A7%D9%86%20%D8%A7%D9%84%D8%AB%D8%A8%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%B2%D9%85%D9%86%20%D8%A7%D9%84%D9%81%D8%AA%D9%86%20%D9%84%D9%84%D8%B4%D9%8A%D8%AE%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ... ياسين العمري',
      desc: 'الثبات في زمن الفتن',
      id: 18,
    },
	{
      audioSrc:
        'https://ia803408.us.archive.org/24/items/22_20210218/%D9%85%D8%AD%D8%A7%D8%B6%D8%B1%D8%A9%20%D8%A8%D8%B9%D9%86%D9%88%D8%A7%D9%86%20%D9%85%D9%82%D8%A7%D9%85%20%D8%A7%D9%84%D8%B1%D8%B6%D8%A7%20%D9%84%D9%84%D8%B4%D9%8A%D8%AE%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ....ياسين العمري',
      desc: 'مقام الرضا',
      id: 19,
    },
	{
      audioSrc:
        'https://ia903408.us.archive.org/24/items/22_20210218/%D9%85%D8%AD%D8%A7%D8%B6%D8%B1%D8%A9%20%D8%B0.%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A%20%D8%A8%D8%B9%D9%86%D9%88%D8%A7%D9%86%20%D9%83%D8%A7%D9%86%20%D8%AE%D9%84%D9%82%D9%87%20%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ.... ياسين العمري',
      desc: 'كان خلقه القرآن',
      id: 20,
    },
	{
      audioSrc:
        'https://ia903408.us.archive.org/24/items/22_20210218/%D9%87%D8%B0%D8%A7%20%D8%B1%D8%B3%D9%88%D9%84%20%D8%A7%D9%84%D9%84%D9%87%20%EF%B7%BA..%20Voici%20Mohammad%20%20%D8%B0.%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.mp3',
      coverSrc: 'https://ia903408.us.archive.org/24/items/22_20210218/%D8%AF%D8%A7%D8%B9%D9%8A%D8%A9%20....%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D9%8A.jpg?cnt=0',
      name: ' الأستاذ.... ياسين العمري',
      desc: 'هذا رسول الله ﷺ..',
      id: 21,
    },
  ];

  const currentTrackName = document.querySelector('header h3');
  const currentTrackDesc = document.querySelector('header p');
  const currentTrackCover = document.querySelector('header img');
  const currentTrackAudio = document.querySelector('audio');
  const playPauseBtn = document.querySelector('.event-playPause');
  const muteUnmuteBtn = document.querySelector('.event-muteUnmute');
  const playNextBtn = document.querySelector('.event-next');
  const playPrevBtn = document.querySelector('.event-prev');
  const progress = document.querySelector('.slider-progress');
  const currentTrackTime = document.querySelector('.count-current');
  const finalTrackTime = document.querySelector('.count-final');
  // ADD TRACKS TO MY PLAYLIST ON PAGE LOAD
  (function addMyTracksList() {
    for (let track of tracksList) {
      var li = document.createElement('li');
      li.id = track.id;
      li.innerHTML = `
                    <div class="track-number">0${track.id}</div>
                    <img
                    src=${track.coverSrc}
                    class="track-img"
                    alt=""
                    />

                    <div class="track-detail">
                    <div class="track-detail_name">${track.name}</div>
                    <div class="track-detail_desc">
                        <small>${track.desc}</small>
                    </div>
                    </div>
        `;
      document.querySelector('ul').appendChild(li);
      (function (id) {
        li.addEventListener(
          'click',
          () => {
            playSelectedTrack(id);
          },
          false
        );
      })(track.id);
    }
  })();

  let trackId = 0;

  const loadTrack = (songId) => {
    const song = tracksList.find((track) => track.id === songId);

    const { audioSrc, coverSrc, name, desc } = song;
    currentTrackName.innerText = name;
    currentTrackDesc.innerText = desc;
    currentTrackAudio.src = audioSrc;
    currentTrackCover.src = coverSrc;
  };

  const playSelectedTrack = (songId) => {
    trackId = songId;
    loadTrack(songId);
    playTrack();
  };

  loadTrack(trackId);

  const playTrack = () => {
    playPauseBtn.classList.remove('fa-play');
    playPauseBtn.classList.add('fa-pause');

    currentTrackAudio.play();
  };

  const pauseTrack = () => {
    playPauseBtn.classList.remove('fa-pause');
    playPauseBtn.classList.add('fa-play');

    currentTrackAudio.pause();
  };

  const playPrevTrack = () => {
    trackId--;

    if (trackId < 0) {
      trackId = tracksList.length - 1;
    }
    loadTrack(trackId);
    playTrack();
  };

  const playNextTrack = () => {
    trackId++;
    if (trackId > tracksList.length - 1) {
      trackId = 0;
    }
    loadTrack(trackId);
    playTrack();
  };

  const updateProgress = () => {
    const currentTime = currentTrackAudio.currentTime;
    const trackDuration = currentTrackAudio.duration;
    const percent = (currentTime / trackDuration) * 100;
    progress.style.width = percent + '%';
    let curMins = Math.floor(currentTime / 60);
    let curSecs = Math.floor(currentTime - curMins * 60);
    let durMins = Math.floor(trackDuration / 60) || '--';
    let durSecs = Math.floor(trackDuration - durMins * 60) || '--';

    if (curMins < 10) {
      curMins = `0${curMins}`;
    }
    if (curSecs < 10) {
      curSecs = `0${curSecs}`;
    }
    if (durMins < 10) {
      durMins = `0${durMins}`;
    }
    if (durSecs < 10) {
      durSecs = `0${durSecs}`;
    }

    currentTrackTime.innerText = `${curMins}:${curSecs}`;
    finalTrackTime.innerText = `${durMins}:${durSecs}`;
  };

  const muteUnmuteTrack = () => {
    if (currentTrackAudio.muted) {
      currentTrackAudio.muted = false;
      muteUnmuteBtn.classList.remove('fa-volume-mute');
      muteUnmuteBtn.classList.add('fa-volume-up');
    } else {
      currentTrackAudio.muted = true;
      muteUnmuteBtn.classList.remove('fa-volume-up');
      muteUnmuteBtn.classList.add('fa-volume-mute');
    }
  };

  playPauseBtn.addEventListener('click', () => {
    const currentlyPlaying = playPauseBtn.classList.contains('fa-pause');

    currentlyPlaying ? pauseTrack() : playTrack();
  });
  muteUnmuteBtn.addEventListener('click', () => muteUnmuteTrack());

  playPrevBtn.addEventListener('click', () => playPrevTrack());
  playNextBtn.addEventListener('click', () => playNextTrack());

  currentTrackAudio.addEventListener('timeupdate', () => updateProgress());
});
