import Accordion from '../components/Accordion.js';


function AccordionPage() {
  const items = [
    {
      label: 'Can I use React on a project?',
      content: 'Yes, React is a popular javascript framework'
    },
    {
      label: 'Can I use JavaScript on a project?',
      content: 'Yes, JavaScript is used to add dynamic and interactive features to websites'
    },
    {
      label: 'Can I use CSS on a project?',
      content: 'Yes, CSS is used to add styles to a website'
    },
  ];

  return <Accordion items={items} />
  
}

export default AccordionPage;
