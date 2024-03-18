import { Text, Title, Section } from 'components/CommonStyles';
import { Item, List, Question, LinkTo } from 'pages/FAQ.styled';
import { Helmet } from 'react-helmet-async';

export default function FAQ() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Get in touch with Alina Ivenko through our contact page.  Reach out  easily, and let me  assist you promptly. Your communication matters to me."
        />
        <meta property="og:title" content="Contact" />
        <meta
          property="og:description"
          content="Get in touch with Alina Ivenko through our contact page.  Reach out  easily, and let me  assist you promptly. Your communication matters to me."
        />
        <title>Contact</title>
      </Helmet>
      <Section primary={'primary'}>
        <Title>Tattoo FAQ's</Title>
        <List>
          <Item>
            <Question>How can I book an appoinment ?</Question>
            <Text primary={'primary'} main={'main'}>
              To schedule an appointment, simply visit the{' '}
              <LinkTo to="/booking/service">booking</LinkTo> page and follow the
              easy steps to select a suitable date and time. For your
              convenience, I also accept same-day appointments, provided you
              already have your design ready. Let's get started and make your
              appointment today! Let the magic begin!
            </Text>

            <Question>Should I prepare for getting a tattoo?</Question>
            <Text primary={'primary'}>
              Prior to your appointment, please refrain from consuming alcohol.
              Ensure that you eat and hydrate adequately beforehand. Avoid
              applying lotions to your skin, as we prefer clean, dry skin for
              the best tattooing experience.
            </Text>
          </Item>

          <Item>
            <Question>
              How do I take the first steps to turn my idea into a reality?
            </Question>
            <Text primary={'primary'}>
              To begin, take some time to explore and research the tattoo styles
              that resonate with you. Collecting reference photos can be helpful
              in expressing your preferences to the tattoo artist. If you're
              excited about the idea of working together, let's make some magic
              happen! Head to the booking page, where you can choose a suitable
              time to schedule a free{' '}
              <LinkTo to="/booking/service">consultation</LinkTo>. During this
              consultation, I'll be more than happy to address any additional
              questions you may have about your new tattoo. Let's collaborate to
              bring your vision to life!
            </Text>
          </Item>

          <Item>
            <Question>How old do I have to be to get tattooed ?</Question>

            <Text primary={'primary'}>
              To receive a tattoo in Toronto, individuals must be 18 years of
              age and present a valid government-issued photo ID. However,
              exceptions can be made for customers as young as 16 years old with
              signed parental consent. In such cases, the parents or legal
              guardian must accompany the minor and provide their own
              government-issued ID along with an additional one for the minor.
              If the signee is a legal guardian, proof of guardianship through
              legal documentation is required. Once the necessary{' '}
              <LinkTo to="/waiverform">waiver</LinkTo> form is completed, the
              parent or guardian does not need to be present at the time of the
              tattoo procedure. Please note that only a parent or legal guardian
              can act as a signee for a minor; signed notes or phone calls from
              other relatives or friends will not be accepted in these cases.
            </Text>
          </Item>

          <Item>
            <Question>
              Can I bring a friend or family member to my appointment?
            </Question>

            <Text primary={'primary'}>
              Please come to your appointment alone to respect the privacy of
              other artists and clients. However, exceptions will be made for
              those who require a guardian or personal assistance; just let me
              know in advance. I understand you, so don't hesitate to ask.
            </Text>
          </Item>

          <Item>
            <Question>How long will my tattoo last?</Question>
            <Text primary={'primary'}>
              The longevity of a tattoo varies depending on factors such as skin
              type, location, ink quality, and aftercare. Generally, tattoos are
              considered permanent, but they may fade slightly over time. With
              proper <LinkTo to="/aftercare">care</LinkTo> and sun protection, a
              well-done tattoo can last for many years. However, some fading is
              natural over the long term.
            </Text>
          </Item>

          <Item>
            <Question>What is the cancellation policy?</Question>
            <Text primary={'primary'}>
              Our cancellation policy emphasizes that the tattoo deposit is
              non-refundable. If you wish to reschedule your appointment, we
              kindly request at least 1 week's notice. Failing to provide
              adequate notice will require purchasing a new deposit for the
              rescheduled appointment. We appreciate your understanding and
              respect for others' time, as someone else could have booked the
              slot you initially reserved.
            </Text>
          </Item>

          <Item>
            <Question>Do you do finger tattoos or inner lip tattoos?</Question>
            <Text primary={'primary'}>
              Finger tattoos and inner-lip tattoos are possible, but they tend
              to have poor healing outcomes. Fingers have non-porous skin and
              experience constant movement and wear, leading to the ink
              spreading or fading over time. Similarly, the nature of tissue in
              the inner lip makes it challenging for tattoos to heal well, as
              it's constantly rubbing against teeth and remains wet. Therefore,
              I cannot guarantee the final quality of these tattoos, and any
              touch-ups will be at your expense.
            </Text>
          </Item>
        </List>
      </Section>
    </>
  );
}
