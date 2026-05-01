import { Link } from 'react-router-dom';

export function FACSPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Facial Action Units</h2>

      <h3 className="text-l font-bold mt-6 mb-2">Component Method</h3>
      <p className="text-stone-600 text-sm leading-relaxed">
        The core premise of the component method is that each emotion is associated 
        with a unique combination of facial muscle movements, called Action Units (AUs), 
        which can be identified and measured independently. 
      </p>
      
      <h3 className="text-l font-bold mt-6 mb-2">FACS</h3>
      <p className="text-stone-600 text-sm leading-relaxed">
        The Facial Action Coding System (FACS), developed by Ekman and Friesen (1978), 
        is an implementation of the component method — an approach to measuring 
        emotional expression derived from early anatomical work by Duchenne. 
      </p>

      <p className="mt-5 text-stone-600 text-sm leading-relaxed">
        FACS provides a standardized vocabulary of Action Units, allowing researchers 
        to code not only which AUs are active during an emotional expression, 
        but also the intensity of each change on a five-point scale, from barely 
        noticeable to maximum intensity. 
        
        For example, the simultaneous activation of AU9 (Nose Wrinkler), 
        AU15 (Lip Corner Depressor), and AU16 (Lower Lip Depressor) at high intensity 
        would be coded as a strongly aroused disgust expression. 
      </p>

      <h3 className="text-l font-bold mt-6 mb-2">Component Process Model</h3>
      <p className="text-stone-600 text-sm leading-relaxed"> 
        Within the Component Process Model {' '}
          (see <Link to="/cpm" className="underline underline-offset-2 hover:text-stone-800 transition-colors">
            CPM
          </Link>),{' '}
        FACS operationalizes the 
        motor expression component — the observable facial output that results 
        from the appraisal process. In other words, while the CPM describes 
        why and how an emotion is generated through a sequence of appraisals, 
        FACS provides the tools to measure one of its most visible outputs: 
        what the face does in response.
      </p>
    </main>
  );
}