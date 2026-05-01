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

      <p className="mt-5 text-stone-600 text-sm leading-relaxed">
        Importantly, the component method is built on a strict separation between 
        description and interpretation. An AU describes a muscle movement; 
        The inference that a particular combination signals joy or anger is a separate, 
        subsequent step. This distinction matters: AU12 (Lip Corner Puller) is a movement 
        of the Zygomatic Major muscle; calling it a "smile" imports psychological 
        meaning that the method itself deliberately withholds
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

      <p className="mt-5 text-stone-600 text-sm leading-relaxed">
        One limitation is that FACS only codes what is visible to the 
        human eye, excluding changes like muscle tone 
        and skin color, which require electromyography (EMG) to detect. 
        This is a design choice: a visible-only system can be 
        easily applied to photographs or videos, and modern day technology can 
        automatically encode emotions. 
        The tradeoff is that FACS captures the surface of emotional expression, 
        not its full depth. 
      </p>

      <p className="mt-5 text-stone-600 text-sm leading-relaxed">
        Also note that AU combinations are more complex than a flat list implies. 
        Ekman and Friesen identified relationships and interactions between co-occurring AUs: 
        AUs can jointly produce an entirely new appearance, override one another, 
        or simply coexist. This website presents AUs as additive, yet the author wants
        to stress that real expressions are rarely so clean.
      </p>

      <h3 className="text-l font-bold mt-6 mb-2">FACS beyond output</h3>
      <p className="text-stone-600 text-sm leading-relaxed">
        A growing body of research complicates the view of facial expression as 
        a simple readout of internal state. Blasberg et al. (2023) found that 
        AU12 (Lip Corner Puller) activation during a psychosocial stress task 
        predicted significantly lower cortisol reactivity, suggesting that 
        smiling may actively buffer the stress response, not merely reflect 
        positive affect. This is consistent with the facial feedback hypothesis, 
        which proposes a bidirectional relationship between facial movement and 
        emotional experience. If so, the face is not just an output of the appraisal 
        process described by the CPM: it may feed back into it, modulating the 
        very states it expresses.
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