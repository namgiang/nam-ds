import { Text } from "@nam-ds/ui";
import "./index.css";

function App() {
  const activity = ""; // Placeholder for user activity input
  return (
    <div data-theme="dutch-phrase-companion" className="app">
      <main>
        <section className="phrases-section">
          <Text as="h2" variant="heading" size="xl" weight="semibold">
            Practice These Dutch Phrases
          </Text>

          {activity ? (
            <div className="phrase-preview">
              <Text as="h3" variant="subheading" size="lg" weight="medium">
                You typed: {activity}
              </Text>
              <Text variant="body" color="muted" italic>
                Dutch phrases will appear here!
              </Text>
            </div>
          ) : (
            <div className="empty-state">
              <Text variant="body" color="muted" align="center">
                Enter your daily activities above to get personalized Dutch
                phrases!
              </Text>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
