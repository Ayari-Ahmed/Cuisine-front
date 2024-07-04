
import Input from '../components/Input'
import Input2 from '../components/Input2'
import InputWithIcon from  '../components/InputWithIcon'
import PaymentButton from   '../components/PaymentButton'
import backgroundImage from '../assets/colorEffect.png';
const Body = () => {
  return (
    <div className='flex flex-row  rounded-xl w-[1200px] p-4 mx-auto' style={{boxShadow: '0px 4px 18px 0px rgba(0, 0, 0, 0.12)'}}>
      <div className='w-3/5 p-2 ml-4 '>
        <h1 className='text-2xl font-bold '>Faisons le paiement</h1>
        <p className='text-gray-500 mt-8 text-base'>
        Pour commencer votre abonnement, saisissez les détails de votre carte pour effectuer le paiement.
        </p>

        

        <div className="my-4 mt-4">
            <label className="text-xm mr-4 text-gray-500">Nom du titulaire de la carte</label>
            <Input
                placeholder="PAULINA CHIMAROKE"
                style={{ borderBottom: '2px solid #C7C7C7' }}
            />
          </div>

          <div className="my-4 mt-4">
            
            <InputWithIcon
              placeholder="9870 3456 7890 6473"
              borderColor='#FC5A1A' 
            />


          </div>

          <div className="my-4 mt-4 flex">
  <div className="w-1/2 mr-20">
    <label className="text-sm mr-4 text-gray-500">Expiration</label>
   <br />
    <Input2 type="date" placeholder="MM/DD" />
  </div>
  
  <div className="w-1/2">
    <label className="text-sm mr-4 text-gray-500">CVC</label>
    <br />
    <Input2 type="text" placeholder="654" />
  </div>
</div>

<br />
<br />

<div className="w-1/2 mr-4">
    <PaymentButton />
    </div> 
    <br />
    
      </div>



      <div className='w-2/5 p-2 bg-gray mx-12 my-4 bg-gray-50' >
      <div className="my-4 mt-4 b p-2 bg-cover bg-center"
        style={{ 
            backgroundImage: `url(${backgroundImage})`,
            
        }}>
                <br />
                    <label className="text-xm mr-4 text-gray-500 font-medium">Vous payez</label>
                    <br />
                    <label className="text-5xl mr-4 text-black font-bold ml-4">$49,00</label>
                    <br />
                    <br />
                    <div className='flex flex-row between-1 p-4 mx-auto ' >
                        <div className='w-4/5 p-2'>
                        <label className=" text-xm mr-4 text-black font-bold">Management qualité et amélioration continue</label>
                        <p className='text-gray-500 mt-2 text-xs'>Version 2017</p>
                        </div>
                        <div className='w-2/5 p-2 '>
                            <p className='font-medium'>$ 400.00</p>
                        </div>

                    </div>

            </div>
            <div>
                <hr className=" mx-8 border-t border-gray-300 " />
                <div className='flex flex-row justify-between p-4 mx-auto'>
                    <div className='w-4/5 p-2'>
                        <p className="text-xm mr-4 text-black font-bold">Tax</p>
                        <br />
                        <p className="text-xm mr-4 text-black font-bold">Total</p>
                    </div>

                    <div className='w-4/5 p-2 text-right'>
                        <p className="text-xm mr-4 text-black font-semibold">$ 0.00</p>
                        <br />
                        <p className="text-xm mr-4 text-black font-semibold">$ 49.00</p>
                    </div>
                </div>
            </div>


        </div>


    </div>
  )
}

export default Body
