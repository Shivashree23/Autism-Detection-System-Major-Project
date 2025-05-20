import { useRef, useState } from 'react';

const options = [
  'Definitely Agree',
  'Slightly Agree',
  'Slightly Disagree',
  'Definitely Disagree',
];

const questions = [
  'I prefer to do things with others rather than on my own.',
  'I prefer to do things the same way over and over again.',
  'If I try to imagine something, I find it very easy to create a picture in my mind.',
  'I frequently get so strongly absorbed in one thing that I lose sight of other things.',
  'I often notice small sounds when others do not.',
  'I usually notice car number plates or similar strings of information.',
  "Other people frequently tell me that what I've said is impolite, even though I think it is polite.",
  "When I'm reading a story, I can easily imagine what the characters might look like.",
  'I am fascinated by dates.',
  "In a social group, I can easily keep track of several different people's conversations.",
  'I find social situations easy.',
  'I tend to notice details that others do not.',
  'I would rather go to a library than a party.',
  'I find making up stories easy.',
  'I find myself drawn more strongly to people than to things.',
  "I tend to have very strong interests which I get upset about if I can't pursue.",
  'I enjoy social chit-chat.',
  "When I talk, it isn't always easy for others to get a word in edgeways.",
  'I am fascinated by numbers.',
  "When I'm reading a story, I find it difficult to work out the characters' intentions.",
  "I don't particularly enjoy reading fiction.",
  'I find it hard to make new friends.',
  'I notice patterns in things all the time.',
  'I would rather go to the theatre than a museum.',
  'It does not upset me if my daily routine is disturbed.',
  "I frequently find that I don't know how to keep a conversation going.",
  "I find it easy to 'read between the lines' when someone is talking to me.",
  'I usually concentrate more on the whole picture, rather than the small details.',
  'I am not very good at remembering phone numbers.',
  "I don't usually notice small changes in a situation, or a person's appearance.",
  'I know how to tell if someone listening to me is getting bored.',
  'I find it easy to do more than one thing at once.',
  "When I talk on the phone, I'm not sure when it's my turn to speak.",
  'I enjoy doing things spontaneously.',
  'I am often the last to understand the point of a joke.',
  'I find it easy to work out what someone is thinking or feeling just by looking at their face.',
  'If there is an interruption, I can switch back to what I was doing very quickly.',
  'I am good at social chit-chat.',
  'People often tell me that I keep going on and on about the same thing.',
  'When I was young, I used to enjoy playing games involving pretending with other children.',
  'I like to collect information about categories of things.',
  'I find it difficult to imagine what it would be like to be someone else.',
  'I like to plan any activities I participate in carefully.',
  'I enjoy social occasions.',
  "I find it difficult to work out people's intentions.",
  'New situations make me anxious.',
  'I enjoy meeting new people.',
  'I am a good diplomat.',
  "I am not very good at remembering people's date of birth.",
  'I find it very easy to play games with children that involve pretending.',
];

const AutismQuestionsPage = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [error, setError] = useState<string | null>(null);
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleChange = (questionIndex: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: value }));
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.keys(answers).length < questions.length) {
      setError('Please answer all questions before submitting.');
      const firstUnanswered = questions.findIndex((_, i) => !answers[i]);
      questionRefs.current[firstUnanswered]?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setError(null);
    console.log('Submitted Answers:', answers);
    alert('Thank you for completing the test!');
  };

  return (
    <div className="min-h-screen bg-[#e6f3ff] text-[#1d4d85] px-4 py-10 md:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#2b7dad]">
          Autism Spectrum Quotient
        </h1>
        <p className="mb-10 text-center text-md md:text-lg">
          For each statement below, choose one response that best describes how strongly that statement applies to you:
        </p>

        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded-md mb-6 text-center font-semibold">
            {error}
          </div>
        )}

        <form className="space-y-8" onSubmit={handleSubmit}>
          {questions.map((question, index) => (
            <div
              key={index}
              ref={(el) => (questionRefs.current[index] = el)}
              className={`space-y-4 p-4 rounded-xl ${
                error && !answers[index] ? 'bg-red-50 border border-red-400' : ''
              }`}
            >
              <p className="font-semibold text-lg">
                {index + 1}. {question}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {options.map((option, optIndex) => (
                  <label key={optIndex} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`q${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={() => handleChange(index, option)}
                      className="accent-[#2b7dad]"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-[#2b7dad] text-white px-8 py-3 rounded-lg hover:bg-[#1d4d85] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AutismQuestionsPage;
