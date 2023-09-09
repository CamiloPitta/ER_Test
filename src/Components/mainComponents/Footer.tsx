import { infoCompany } from '../../rawData';
import { CustomLinkIcon } from '../links';

const Footer = () => {
  return (
    <footer
      className="bg-secondary-dark flex flex-wrap gap-28 justify-center p-2 items-center"
    >
      <figure
        className="flex flex-col items-center shadow-sm shadow-secondary-light gap-2 w-56 p-2 rounded-xl"
      >
        <img
          src="https://endrock.software/wp-content/uploads/2022/05/Logo.svg"
          alt="company logo"
          className="w-min"
        />
        <figcaption
          className="text-2xl capitalize text-primary-light font-bold w-56 text-center"
        >
        
        </figcaption>
      </figure>
      
      <section
        className='flex gap-2 flex-col font-custom px-8'
      >
        <h3 className='uppercase text-primary-light py-2  '>Check us out on social media!</h3>      
        {
          infoCompany.map((info) => {
            return <CustomLinkIcon
              content={info.content}
              to={info.href}
              icon={info.logo}
              key={info.id}
            />
          })
        }
      </section>
    </footer>
  )
}

export default Footer
