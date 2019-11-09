#include <bits/stdc++.h> //works like magic, but at cost.
using namespace std;

#define deb(x) cout << #x << "=" << x << endl;
#define deb2(x, y) cout << #x << "=" << x << "\t" << #y << "=" << y << endl;
#define deb3(x, y, z) cout << #x << "=" << x << "\t" << #y << "=" << y << "\t" << #z << "=" << z << endl;
#define fo(i, n) for(i=0; i<n; i++)
#define Fo(i, k, n) for(i=k; i<n; i++)
int gcd(int a, int b) { return b ? gcd(b, a%b) : a; }

template<typename... T>
void read(T&... args) {
	((cin >> args), ...);
}

template<typename... T>
void write(T&&... args) { //rvalue reference is new to C++ 
	((cout << args << " "), ...);
}

void solve() {
	int a, b;
}

int main() {
	int t = 1;
	// cin >> t;
	while(t--) solve();

	return 0;
}