#!/bin/bash
echo "🔒 REFURBLY SECURITY AUDIT"
echo "=========================="
echo ""

# 1. Check for exposed API keys
echo "1️⃣ Checking for exposed secrets..."
if grep -r "sk_live\|sk_test" src/ --exclude-dir=node_modules 2>/dev/null | grep -v "REDACTED"; then
  echo "❌ WARNING: Stripe secret keys found in code!"
else
  echo "✅ No Stripe secret keys in frontend code"
fi

# 2. Check Firebase config
echo ""
echo "2️⃣ Checking Firebase config..."
if grep -r "apiKey:" src/config/ 2>/dev/null; then
  echo "⚠️  Firebase API key is in code (this is OK for public apps)"
fi

# 3. Check for console.logs with sensitive data
echo ""
echo "3️⃣ Checking for sensitive console.logs..."
if grep -r "console.log.*password\|console.log.*token\|console.log.*secret" src/ 2>/dev/null; then
  echo "⚠️  WARNING: Logging sensitive data"
else
  echo "✅ No sensitive data in logs"
fi

# 4. Check authentication features
echo ""
echo "4️⃣ Checking authentication features..."
if grep -r "sendPasswordResetEmail\|password reset" src/ 2>/dev/null > /dev/null; then
  echo "✅ Password reset implemented"
else
  echo "❌ NO PASSWORD RESET - users can get locked out!"
fi

if grep -r "sendEmailVerification\|email verification" src/ 2>/dev/null > /dev/null; then
  echo "✅ Email verification implemented"
else
  echo "❌ NO EMAIL VERIFICATION - fake emails can sign up"
fi

# 5. Check CORS/CSP
echo ""
echo "5️⃣ Checking security headers..."
if grep -r "Content-Security-Policy" firebase.json ios/ 2>/dev/null; then
  echo "✅ CSP headers configured"
fi

# 6. Check for XSS vulnerabilities
echo ""
echo "6️⃣ Checking for XSS risks..."
if grep -r "dangerouslySetInnerHTML\|innerHTML.*=" src/ 2>/dev/null; then
  echo "⚠️  WARNING: Potential XSS vulnerability"
else
  echo "✅ No obvious XSS risks"
fi

# 7. Check Functions security
echo ""
echo "7️⃣ Checking Cloud Functions security..."
if grep -r "if.*!request.auth" functions/index.js 2>/dev/null; then
  echo "✅ Functions check authentication"
else
  echo "⚠️  Functions may not verify auth"
fi

echo ""
echo "=========================="
echo "🔒 AUDIT COMPLETE"
